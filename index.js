'use strict';

/**
 * General purpose utility functions.
 * @module juliutils
 */

/**
 * Interprets whether a string means yes or not.
 * @memberOf juliutils
 * @param {String} str - Test string.
 * @returns {Boolean} No?
 *
 * @example
 * yes('yes'); // true
 
 * @example
 * yes('yup'); // true
 
 * @example
 * yes('no'); // false
 */
function yes(str) {
    // "yes"
    // "y"
    // "yeah" or "yea"
    // "ya" or "ye"
    // "yup" or "yep"
    // "yay"
    // "ok" or "k"
    // "mhmmm..." (any number of trailing m's)
    let pattern = /^(yes|y|yeah?|y[ae]|y[ue]p|yay|o?k|mhm+)$/i;
    
    // remove all non-alphabetical characters (including spaces and numbers)
    return pattern.test(str.replace(/[^A-Za-z]/g, ''));
}

/**
 * Interprets whether a string means no or not.
 * @memberOf juliutils
 * @param {String} str - Test string.
 * @returns {Boolean} Yes?
 *
 * @example
 * no('no'); // true
 
 * @example
 * no('nope'); // true
 
 * @example
 * no('yes'); // false
 */
function no(str) {
    // "no"
    // "n"
    // "na" or "nay" or "nah"
    // "nope" or "nop
    let pattern = /^(no|n|na[yh]?|nope?|)$/i;
    
    // remove all non-alphabetical characters (including spaces and numbers)
    return pattern.test(str.replace(/[^A-Za-z]/g, ''));
}

/**
 * Checks whether two dates are within N days of each other.
 * @memberOf juliutils
 * @param {Date} date1 - First date.
 * @param {Date} date2 - Second date.
 * @param {Number} [days=1] - Number of days.
 * @returns {Boolean} Whether the two dates are within N days of each other.
 */
function withinNDaysOf(date1, date2, days = 1) {
    const ONE_DAY = 24 * 60 * 60 * 1000;
    const difference = Math.abs(date1 - date2);
    
    return difference <= (ONE_DAY * days);
}

/**
 * Prints a date as a string in mm/dd/YYYY format.
 * @memberOf juliutils
 * @param {Date} date - Date to print.
 * @param {String} [separator='/'] - Separator used between dates.
 * @returns {String} String of date.
 */
function printDate(date, separator = '/') {
    return [
        date.getMonth() + 1,
        date.getDate(),
        date.getFullYear()
    ].join(separator);
}

/**
 * Prints a date for a CSV file in YYYY/mm/dd format.
 * @memberOf juliutils
 * @param {Date} date - Date to print.
 * @returns {String} String of date to be inserted into a CSV cell.
 */
function printCSVDate(date) {
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('/');
}

/**
 * Omits keys with values that are empty from object.
 * @memberOf juliutils
 * @param {Object} obj - Object to omit values from.
 * @returns {Object} Object with null, undefined, or empty string values omitted.
 */
function omitEmpty(obj) {
    let result = {};
    
    for (let k in obj) {
        if (obj[k] != null && obj[k] !== '') {
            result[k] = obj[k];
        }
    }
    
    return result;
}

/**
 * Gets unique values from array.
 * @memberOf juliutils
 * @param {Array} arr - Array of basic items (strings, numbers).
 * @returns {Array} Array with unique values.
 */
function uniq(arr) {
    return [...new Set(arr)];
}

/**
 * Gets difference between two arrays.
 * @memberOf juliutils
 * @param {Array} arr1 - First array.
 * @param {Array} arr2 - Second array.
 * @returns {Array} Array with values removed.
 */
function difference(arr1, arr2) {
    return arr1.filter((a) => {
        return arr2.indexOf(a) === -1;
    });
}

/**
 * Partitions array based on conditions.
 * @memberOf juliutils
 * @param {Array} arr - Array.
 * @param {Function} method - Function to satisfy.
 * @returns {Array} Partitioned array.
 */
function partition(arr, method) {
    return arr.reduce((prev, value) => {
        // pick which index to push to based on
        // thruthiness of return value from method
        const index = method(value) ? 0 : 1;
        
        // add it
        prev[index].push(value);
        
        return prev;
    }, [
        // for truthy values
        [],
        // for falsy values
        []
    ]);
}

/**
 * Returns mode from array of numbers.
 * @memberOf juliutils
 * @param {Array} arr - Array of numbers.
 * @returns {(Number|undefined)} Mode of numbers, or undefined if array is empty.
 */
function mode(arr) {
    // store number of occurences for each value
    let modeMap = {};
    let maxCount = 0;
    let maxValue;
    
    arr.forEach((value) => {
        let count = (modeMap[value] || 0) + 1;
        
        // increment map for value
        modeMap[value] = count;
        
        // a new max was reached
        if (count > maxCount) {
            maxValue = value;
            maxCount = count;
        }
    });
    
    return maxValue;
}

/**
 * Groups an array by value from key.
 * @memberOf juliutils
 * @param {Array} arr - Array.
 * @param {(String|Function)} key - Key to take value from.
 * @returns {Object} Object of groups.
 */
function groupBy(arr, key) {
    // if 'key' is a function, set method to 'key'
    const method = typeof key === 'function' ? key : null;
    
    return arr.reduce((group, item) => {
        const value = method ? method(item) : item[key];
        
        (group[value] = group[value] || []).push(item);
        
        return group;
    }, {});
}

/**
 * Indexes an array by value from key.
 * @memberOf juliutils
 * @param {Array} arr - Array.
 * @param {(String|Function)} key - Key to take value from.
 * @returns {Object} Indexed object.
 */
function indexBy(arr, key) {
    // if 'key' is a function, set method to 'key'
    const method = typeof key === 'function' ? key : null;
    
    return arr.reduce((group, item) => {
        const value = method ? method(item) : item[key];
        
        if (group[value] === undefined) {
            group[value] = item;
        }
        
        return group;
    }, {});
}

/**
 * Averages an array of values.
 * @memberOf juliutils
 * @param {Array} values - Array of values.
 * @returns {Number} Average of all values in array.
 */
function arrAverage(values) {
    if (values.length === 0) {
        return 0;
    }
    
    // get the sum of all values
    const sum = values.reduce((prev, num) => {
        return prev + num;
    }, 0);
    
    return sum / values.length;
}

/**
 * Flattens an array.
 * @memberOf juliutils
 * @param {Array} arr - Array to flatten.
 * @param {Boolean} [deep] - Recursive flatten?
 * @returns {Array} Flattened array.
 */
function flatten(arr, deep) {
    return arr.reduce((result, value) => {
        if (Array.isArray(value)) {
            if (deep) {
                return [...result, ...flatten(value, deep)];
            } else {
                return [...result, ...value];
            }
        } else {
            return [...result, value];
        }
    }, []);
}

/**
 * Removes all falsy values from an array.
 * @memberOf juliutils
 * @param {Array} arr - Array to compact.
 * @returns {Array} Compacted array.
 */
function compact(arr) {
    return arr.filter(Boolean);
}

/**
 * Flattens and compacts array.
 * @memberOf juliutils
 * @param {Array} arr - Array to flatten and compact.
 * @param {Boolean} [deep] - Whether the array should be flattened recursively.
 * @returns {Array} Flattened and compacted array.
 */
function flattenCompact(arr, deep) {
    return compact(flatten(arr, deep));
}

/**
 * Create range of numbers from low to high.
 * @memberOf juliutils
 * @param {Number} low - Low number.
 * @param {Number} high - High number.
 * @returns {Array} Array of numbers in range.
 */
function range(low, high) {
    return Array(high - low).fill(low).map((value, i) => value + i);
}

/**
 * Create a random string.
 * @memberOf juliutils
 * @param {Number} [length=10] - Length of string.
 * @returns {String} Random string.
 */
function randomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const count = characters.length;
    let str = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * count);
        
        // pick a character at random
        str += characters.charAt(randomIndex);
    }
    
    return str;
}

/**
 * Picks keys from an object.
 * @memberOf juliutils
 * @param {Object} object - Object to pick values from.
 * @param {Array} keys - Array of keys to pick.
 * @returns {Object} Object with picked keys.
 */
function pluck(object, keys) {
    let result = {};
    
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = object[keys[i]];
    }
    
    return result;
}

// alias for pluck
const pickKeys = pluck;

/**
 * Creates a tree within an object.
 *
 * Modifies the original object.
 * @memberOf juliutils
 * @param {Object} obj - Object to build tree on.
 * @param {Array} tree - Tree to build on 'obj'.
 * @param {*} [ender] - Any value to use as the end value.
 * @returns {Object} The same object passed as 'obj'.
 *
 * @example
 * createTree({}, ['fruit', 'color'], 'red'); // { fruit: { color: 'red' } }
 */
function createTree(obj, tree, ender) {
    let current = obj;
    
    for (let i = 0; i < tree.length; i++) {
        const key = tree[i];
        
        // check that the key is present
        if (!(key in current)) {
            if (tree.length - 1 === i) {
                current[key] = ender;
            } else {
                current[key] = {};
            }
        }
        
        current = current[key];
    }
    
    return obj;
}

/**
 * Recursively transforms key/values in object, including array values.
 *
 * Also can act as a basic deep clone method.
 * @memberOf juliutils
 * @param {Object} obj - Object to transform.
 * @param {Object} [transforms={}] - Object containing transformation functions.
 * @param {Function} [transform.keys] - Function for transforming keys from 'obj'.
 * @param {Function} [transform.values] - Function for transforming values from 'obj'.
 * @param {Number} [level=0] - Level of recursion, passed as the 2nd argument to a transform function.
 * @returns {Object} Transformed object.
 *
 * @example
 * transformObj({
 *     apple: 'Green',
 *     orange: 'Orange',
 *     cherry: {
 *         color: 'Red'
 *     }
 * }, {
 *     keys: (key, level) => {
 *         return level === 0 ? `fruit_${key}` : key;
 *     },
 *     values: (value) => {
 *         return value.toUpperCase();
 *     }
 * }); // { fruit_apple: 'GREEN', fruit_orange: 'ORANGE', fruit_cherry: { color: 'RED' } }
 */
function transformObj(obj, transforms = {}, level = 0) {
    if (typeof obj !== 'object' || obj === null) {
        // nothing we can do
        return obj;
    }
    
    function convertValue(value) {
        if (Array.isArray(value)) {
            return value.map(convertValue);
        } else if (typeof value === 'object') {
            return transformObj(value, transforms, level + 1);
        } else if (transforms.values) {
            // transform value
            return transforms.values(value, level);
        } else {
            return value;
        }
    }
    
    return Object.entries(obj).reduce((result, [key, value]) => {
        if (transforms.keys) {
            // transform key
            key = transforms.keys(key, level);
        }
        
        result[key] = convertValue(value);
        
        return result;
    }, {});
}

/**
 * Recursively clones an object's values.
 *
 * This will only clone objects containing basic values (e.g. Strings, numbers).
 * @memberOf juliutils
 * @param {Object} obj - Object.
 * @returns {Object} Cloned object.
 */
function deepClone(obj) {
    return transformObj(obj);
}

/**
 * Creates an object from an array of keys.
 * @memberOf juliutils
 * @param {Array} keys - Array of keys.
 * @param {*} [value] - Value to assign to each key.
 * @returns {Object} Object with keys mapped from array.
 *
 * @example
 * arrToKeys(['a', 'b'], 0); // { a: 0, b: 0 }
 */
function arrToKeys(keys, value) {
    let result = {};
    
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = value;
    }
    
    return result;
}

/**
 * Checks if a value is a number or not.
 * @memberOf juliutils
 * @param {*} value - Value to test.
 * @returns {Boolean} Whether the value is a number or not.
 */
function isNumber(value) {
    return Boolean(
        !isNaN(parseFloat(value)) &&
        !isNaN(value - 0) &&
        isFinite(value)
    );
}

/**
 * Truncates a string with option to add trail at end.
 * @memberOf juliutils
 * @param {String} string - String.
 * @param {Number} length - Length to trim to.
 * @param {String} [trail] - Trailing characters.
 * @returns {String} Truncated string.
 */
function truncate(string, length, trail) {
    if (string.length > length) {
        return string.substr(0, length).trim() + (trail || '');
    } else {
        return string;
    }
}

/**
 * Chooses a form based on number.
 * @memberOf juliutils
 * @param {String} singular - Singular form.
 * @param {String} plural - Plural form.
 * @param {Number} value - Test value.
 * @returns {String} Form based on value.
 */
function basicPlural(singular, plural, value) {
    if (value !== 1) {
        return plural;
    } else {
        return singular;
    }
}

/**
 * Assigns values of object as keys.
 * @memberOf juliutils
 * @param {Object} obj - Object.
 * @returns {Object} Object with values mapped as keys.
 *
 * @example
 * valuesAsKeys({ a: 'apple' }); // { a: 'apple', 'apple': 'a' }
 */
function valuesAsKeys(obj) {
    // create clone so we do not modify original object
    let result = Object.assign({}, obj);
    
    for (let k in result) {
        result[result[k]] = k;
    }
    
    return result;
}

/**
 * Escapes a cell value in CSV.
 * @memberOf juliutils
 * @param {String} str - String.
 * @returns {String} Escaped string.
 */
function escapeCSV(str) {
    // quotes are replaced with double quotes to escape them
    // https://www.freeformatter.com/csv-escape.html
    return `"${str.toString().replace(/"/g, '""')}"`;
}

/**
 * Escape a string in RegExp.
 * @memberOf juliutils
 * @param {String} str - String.
 * @returns {String} Escaped string.
 */
function escapeRegExp(str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Escapes text to use as strings in HTML format.
 * @memberOf juliutils
 * @param {String} text - Text to escape.
 * @returns {String} Escaped text.
 */
function escapeHTML(text) {
    const pattern = /[\"&<>]/g;
    
    // Testing string before replace is slightly faster
    // if you do not expect the strings to contain much HTML
    if (pattern.test(text)) {
        return text.replace(pattern, (value) => {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;'
            }[value];
        });
    } else {
        return text;
    }
}

/**
 * Picks a number of items from an array at random.
 * @memberOf juliutils
 * @param {Array} arr - Array to pick items from.
 * @param {Number} num - Number of items to take.
 * @returns {Array} N number of values taken from array at random.
 *
 * @example
 * takeNRandom([1, 2, 3, 4, 5], 3); // [3, 5, 2]
 */
function takeNRandom(arr, num) {
    if (arr.length === 0) {
        return [];
    }
    
    // faster when picking a lower amount of numbers from array
    const getLow = (arr, num) => {
        let indices = [];
        
        while (
            // the indices array is less than the amount we want
            indices.length < num &&
            // the indices array is not the same length as the array
            // this will stop the loop if the indices array becomes the same size as the array
            indices.length !== arr.length
        ) {
            // get a random number according to the array's length
            const random = Math.floor(Math.random() * arr.length);
            
            // if the array already includes the item, do not push item
            if (!indices.includes(random)) {
                indices.push(random);
            }
        }
        
        // map each index to the item in the array at each index
        return indices.map(index => arr[index]);
    };
    // faster when picking a larger amount of numbers from array
    const getHigh = (arr, num) => {
        // create a clone of the array so we do not modify the original
        let clone = arr.slice(0);
        let result = [];
        
        for (let i = 0; i < Math.min(num, clone.length); i++) {
            let random = Math.floor(Math.random() * clone.length);
            // splice value at "num"
            // this returns an array with 1 item so we take its first value
            // this modifies the array so the value no longer exists in it
            // so we do not have to worry about picking it again
            const item = clone.splice(random, 1)[0];
            
            // then push it to the result array
            result.push(item);
        }
        
        return result;
    };
    
    // pick which method to use based on what percent of numbers we want to take from the array
    // 25% is somewhat arbitrary
    // but the higher method should start seeing much better performance around this percent
    if (num / arr.length >= 0.25) {
        return getHigh(arr, num);
    } else {
        return getLow(arr, num);
    }
}

/**
 * Executes a series of Promises in sequence.
 * @memberOf juliutils
 * @param {Array} funcs - An array of functions where each function returns a Promise.
 * @returns {Promise<Array>} Promise that resolves with an array containing results from each resolved Promise in series.
 * 
 * @example
 * const urls = ['/url1', '/url2', '/url3'];
 * promiseSeries(urls.map(url => () => $.ajax(url)))
 *     .then(response => console.log(response));
 */
function promiseSeries(funcs) {
    // derived from, with some modifications to functionality
    // - all previous resolved values in passed to next resolve in series
    // - but there's a catch
    // https://stackoverflow.com/questions/24586110/resolve-promises-one-after-another-i-e-in-sequence/41115086#41115086
    function concat(list) {
        return Array.prototype.concat.bind(list);
    }
    
    function promiseConcat(func) {
        // resolves is an array of values from each resolve
        return function(resolves) {
            // pass resolves array to function
            return func(resolves)
                .then(concat(resolves))
                .catch(error => Promise.reject(error));
        };
    }
    
    function promiseReduce(chain, func) {
        return chain
            .then(promiseConcat(func))
            .catch(error => Promise.reject(error));
    }
    
    return funcs.reduce(promiseReduce, Promise.resolve([]));
}

/**
 * Delays a promise.
 * @memberOf juliutils
 * @param {Number} time - Time in ms to delay.
 * @param {*} [value] - Value to pass to resolve.
 * @returns {Promise} Promise that resolves after the given delay.
 * @since 1.0.1 - The time parameter comes first.
 */
function delayPromise(time, value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    });
}

/**
 * Checks if A is equal to B.
 * @memberOf juliutils
 * @param {*} a - Value A.
 * @param {*} b - Value B.
 * @returns {Boolean} Whether A is equal to B.
 */
function deepEqual(a, b) {
    const isObject = (value) => {
        return Boolean(
            value !== null &&
            typeof value === 'object'
        );
    };
    
    // firstly we check the most primitive test
    if (a === b) {
        return true;
    } else if (Array.isArray(a)) {
        return Boolean(
            // b must also be an array
            Array.isArray(b) &&
            // both arrays must be the same length
            a.length === b.length &&
            a.every((value, i) => {
                // order is important, too
                // takes value at index in b
                return deepEqual(value, b[i]);
            })
        );
    } else if (a instanceof Date) {
        // b isn't also a date
        if (!(b instanceof Date)) {
            return false;
        }
        
        // check timestamp equality
        return a.getTime() === b.getTime();
    } else if (isObject(a)) {
        // b isn't also an object
        if (!isObject(b)) {
            return false;
        }
        
        // helper function for getting property names
        const getProps = (obj) => {
            // these must be sorted since both arrays must be equal
            return Object.getOwnPropertyNames(obj).sort();
        };
        const propsA = getProps(a);
        const propsB = getProps(b)
        // checks that all properties match
        // I found this to be slightly faster than the array.every option
        /*
        propsA.every((key) => {
           // matching values in each object
           return deepEqual(a[key], b[key]);
        })
        */;
        const sameValues = (a, b, props) => {
            for (let i = 0; i < props.length; i++) {
                const key = props[i];
                const valuesAreEqual = deepEqual(a[key], b[key]);
                
                if (!valuesAreEqual) {
                    return false;
                }
            }
            
            return true;
        };
        
        return Boolean(
            // the length of properties is the same in each array
            propsA.length === propsB.length &&
            // check that the property names of each object are equal
            deepEqual(propsA, propsB) &&
            // check that all values are the same
            sameValues(a, b, propsA)
        );
    }
    
    // all tests have failed
    return false;
}

/**
 * Removes elements from an object or array by value.
 * @memberOf juliutils
 * @param {(Object|Array)} item - Item to process. 
 * @param {(*)} value - Value or array of values to remove from item.
 * @returns {(Object|Array)} Object or array without the given values.
 * 
 * @example
 * without({ name: 'cat', color: 'orange' }, ['orange]); // { name: 'cat' }
 
 * @example
 * without(['cat', 'orange'], ['orange]); // ['cat']
 
 * @example
 * // or using just a string
 * without(['cat', 'orange'], 'orange); // ['cat']
 */
function without(item, value) {
    const valueIsArray =  Array.isArray(value);
    const doesNotMatch = (element) => {
        if (valueIsArray) {
            return !value.some((valueElement) => {
                return deepEqual(element, valueElement);
            });
        }
        
        return !deepEqual(element, value);
    };
    
    if (Array.isArray(item)) {
        return item.filter(doesNotMatch);
    }
    
    const itemDoesNotHaveKey = (key) => {
        if (valueIsArray) {
            // key is not in array of values
            return value.indexOf(key) === -1;
        }
        
        return key !== value;
    };
    // takes values to remove from 'item' and adds them to a new object
    const recomposeItem = (newItem, key) => {
        newItem[key] = item[key];
        
        return newItem;
    };
    
    return Object
        .getOwnPropertyNames(item)
        .filter(itemDoesNotHaveKey)
        .reduce(recomposeItem, {});
}

/**
<<<<<<< HEAD
 * Shortens a sentence-like string without breaking the last word.
 * @memberOf juliutils
 * @param {String} str - String to shorten.
 * @param {Number} maxLength - Maximum length for the string.
 * @param {(String|RegExp)} [seperator=' '] - The character to split at. Also used to join words together. If a RegExp is given, the join string will be a space.
 * @returns {String} Shortened string.
 *
 * @example
 * shorten('some string to shorten', 12);
 * // 'some string'
 *
 * @example
 * // using a different seperator
=======
 * Shortens a sentence-like string without cutting off the final word.
 * @memberOf juliutils
 * @param {String} str - String to shorten.
 * @param {Number} maxLength - Max length of string.
 * @param {(String|Regexp)} seperator - Word seperator. If a RegExp is given, words will be seperated by a space.
 * @returns {String} Shortened string.
 *
 * @example
 * shorten('that cat is fat', 8);
 * // 'that cat'
 *
 * @example
 * // custom seperator
>>>>>>> v1.0.3
 * shorten('123x456x789', 8, 'x');
 * // '123x456'
 */
function shorten(str, maxLength, seperator = ' ') {
<<<<<<< HEAD
    // string is already short enough
    if (str.length <= maxLength) {
        return str;
    }
    
    // split name by seperator
    const words = str.split(seperator);
    const seperatorChar = typeof seperator === 'string' ? seperator : ' ';
    const seperatorCharLength = seperatorChar.length;
    let totalLength = 0;
    let endIndex = 0;
    
    for (let i = 0; i < words.length; i++) {
        const wordLength = words[i].length;
        // get the length with the current word and add the length of seperator characters to it
        const currentLength = (totalLength + wordLength) + (i * seperatorCharLength);
        
        if (currentLength > maxLength) {
            // the length has been exceeded
            break;
        }
        
        // re-assign
        totalLength = currentLength;
        endIndex = i;
    }
    
    return words
        // take off the words that would cause the string to exceed the max length
        .splice(0, endIndex + 1)
        // then join them together with the seperator
        .join(seperatorChar);
=======
    // string is already short eniugh
    if (str.length < maxLength) {
        return str;
    }
    
    // split string by seperator
    const words = str.split(seperator);
    // default to space
    const seperatorStr = typeof seperator === 'string' ? seperator : ' ';
    const seperatorStrLength = seperatorStr.length;
    let endIndex = 0;
    let totalLength = 0;
    
    for (let i = 0; i < words.length; i++) {
        const wordLength = words[i].length;
        const currentLength = (totalLength + wordLength) + (seperatorStrLength * i);
        
        if (currentLength > maxLength) {
            break;
        }
        
        // update the index
        endIndex = i;
        // update the total length
        totalLength = currentLength;
    }
    
    return words
        // trim off words that would cause string to exceed past maxLength
        .splice(0, endIndex + 1)
        // then join them together with the seperator
        .join(seperatorStr);
>>>>>>> v1.0.3
}

module.exports = {
    yes,
    no,
    withinNDaysOf,
    printDate,
    printCSVDate,
    omitEmpty,
    uniq,
    difference,
    partition,
    mode,
    groupBy,
    indexBy,
    arrAverage,
    flatten,
    compact,
    flattenCompact,
    range,
    randomString,
    pluck,
    pickKeys,
    createTree,
    deepClone,
    transformObj,
    arrToKeys,
    isNumber,
    truncate,
    basicPlural,
    valuesAsKeys,
    escapeCSV,
    escapeRegExp,
    escapeHTML,
    takeNRandom,
    promiseSeries,
    delayPromise,
    deepEqual,
    without,
    shorten
};