/**
 * General purpose utility functions.
 * @module juliutils
 */
/**
 * Interprets whether a string means yes or not.
 * @param {string} str - Test string.
 * @returns {boolean} No?
 *
 * @example
 * yes('yes'); // true
 *
 * @example
 * yes('yup'); // true
 *
 * @example
 * yes('no'); // false
 */
export function yes(str: string): boolean;
/**
 * Interprets whether a string means yes or not.
 * @param {string} str - Test string.
 * @returns {boolean} No?
 *
 * @example
 * yes('yes'); // true
 *
 * @example
 * yes('yup'); // true
 *
 * @example
 * yes('no'); // false
 */
export function yay(str: string): boolean;
/**
 * Interprets whether a string means no or not.
 * @param {string} str - Test string.
 * @returns {boolean} Yes?
 *
 * @example
 * no('no'); // true
 *
 * @example
 * no('nope'); // true
 *
 * @example
 * no('yes'); // false
 */
export function no(str: string): boolean;
/**
 * Interprets whether a string means no or not.
 * @param {string} str - Test string.
 * @returns {boolean} Yes?
 *
 * @example
 * no('no'); // true
 *
 * @example
 * no('nope'); // true
 *
 * @example
 * no('yes'); // false
 */
export function nay(str: string): boolean;
/**
 * Checks whether two dates are within N days of each other.
 * @param {Date} date1 - First date.
 * @param {Date} date2 - Second date.
 * @param {number} [days=1] - Number of days.
 * @returns {boolean} Whether the two dates are within N days of each other.
 */
export function withinNDaysOf(date1: Date, date2: Date, days?: number): boolean;
/**
 * Prints a date as a string in YYYY/mm/dd format.
 * @param {Date} date - Date to print.
 * @param {string} [separator='/'] - Separator used between dates.
 * @returns {string} String of date.
 */
export function printDate(date: Date, separator?: string): string;
/**
 * Prints a date for a CSV file in YYYY/mm/dd format.
 * @param {Date} date - Date to print.
 * @returns {string} String of date to be inserted into a CSV cell.
 */
export function printCSVDate(date: Date): string;
/**
 * Omits keys with values that are empty from object.
 * @param {Object<string, *>} obj - Object to omit values from.
 * @returns {Object<string, *>} Object with null, undefined, or empty string values omitted.
 */
export function omitEmpty(obj: {
    [x: string]: any;
}): {
    [x: string]: any;
};
/**
 * Gets unique values from array.
 * @template T
 * @param {T[]} arr - Array of items.
 * @param {(string | function(T, number, T[]): (number | string))} [filter] - String or function to filter by.
 * @returns {Array} Array with unique values.
 * @since 1.0.5 - The filter parameter was added.
 */
export function uniq<T>(arr: T[], filter?: string | ((arg0: T, arg1: number, arg2: T[]) => (number | string))): any[];
/**
 * Gets difference between two arrays.
 * @param {*[]} arr1 - First array.
 * @param {*[]} arr2 - Second array.
 * @returns {*[]} Array with values removed.
 */
export function difference(arr1: any[], arr2: any[]): any[];
/**
 * Partitions array based on conditions.
 * @template T
 * @param {T[]} arr - Array.
 * @param {function(T): boolean} method - Function to satisfy.
 * @returns {[T[], T[]]} Partitioned array.
 */
export function partition<T>(arr: T[], method: (arg0: T) => boolean): [T[], T[]];
/**
 * Averages an array of numbers.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} Average of all numbers in array.
 */
export function average(numbers: number[]): number;
/**
 * Averages an array of numbers.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} Average of all numbers in array.
 */
export function arrAverage(numbers: number[]): number;
/**
 * Averages an array of numbers.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number} Average of all numbers in array.
 */
export function mean(numbers: number[]): number;
/**
 * Gets the median from an array of numbers.
 * @param {number[]} numbers - Array of numbers.
 * @returns {(number | undefined)} Median of numbers, or undefined if array is empty.
 */
export function median(numbers: number[]): (number | undefined);
/**
 * Gets mode from array of numbers.
 * @param {number[]} numbers - Array of numbers.
 * @returns {(number | undefined)} Mode of numbers, or undefined if array is empty.
 */
export function mode(numbers: number[]): (number | undefined);
/**
 * Groups an array by value from key.
 * @template T
 * @param {T[]} arr - Array.
 * @param {(string | function(T): (number | string))} key - Key to take value from.
 * @returns {Object<string, T[]>} Object of groups.
 */
export function groupBy<T>(arr: T[], key: string | ((arg0: T) => (number | string))): {
    [x: string]: T[];
};
/**
 * Indexes an array by value from key.
 * @template T
 * @param {T[]} arr - Array.
 * @param {(string | function(T): (string | number))} key - Key to take value from.
 * @returns {Object<string, T>} Indexed object.
 */
export function indexBy<T>(arr: T[], key: string | ((arg0: T) => (string | number))): {
    [x: string]: T;
};
/**
 * Flattens an array.
 * @param {(*[] | *)[]} arr - Array to flatten.
 * @returns {*[]} Flattened array.
 */
export function flatten(arr: (any[] | any)[]): any[];
/**
 * Flattens an array (shallow).
 * @param {(*[] | *)[]} arr - Array to flatten.
 * @returns {(*[] | *)[]} Flattened array.
 */
export function shallowFlatten(arr: (any[] | any)[]): (any[] | any)[];
/**
 * Removes all falsy values from an array.
 * @param {*[]} arr - Array to compact.
 * @returns {*[]} Compacted array.
 */
export function compact(arr: any[]): any[];
/**
 * Flattens and compacts array.
 * @param {(*[] | *)[]} arr - Array to flatten.
 * @param {boolean} [deep] - Whether to deeply flatten array.
 * @returns {(*[] | *)[]} Flattened and compacted array.
 * @deprecated Since version 1.1.4 - Use `flatten` and `compact` separately.
 */
export function flattenCompact(arr: (any[] | any)[], deep?: boolean): (any[] | any)[];
/**
 * Creates a range of numbers from start to stop, non-inclusive.
 * @param {number} start - Number to start at.
 * @param {number} end - Number to end at.
 * @returns {Array} Array of numbers in range.
 *
 * @example
 * range(1, 3); // [1, 2]
 */
export function range(start: number, end: number): any[];
/**
 * Create a random string.
 * @param {Number} [length=10] - Length of string.
 * @returns {String} Random string.
 */
export function randomString(length?: number): string;
/**
 * Picks keys from an object.
 * @param {Object} obj - Object to pick values from.
 * @param {...(string|string[])} keys - Keys to pick. Keys can also be contained within an array.
 * @returns {Object} Object with picked keys.
 * @alias pickKeys
 */
export function pluck(obj: any, ...keys: (string | string[])[]): any;
/**
 * Picks keys from an object.
 * @param {Object} obj - Object to pick values from.
 * @param {...(string|string[])} keys - Keys to pick. Keys can also be contained within an array.
 * @returns {Object} Object with picked keys.
 * @alias pickKeys
 */
export function pickKeys(obj: any, ...keys: (string | string[])[]): any;
/**
 * Creates a tree within an object.
 *
 * Modifies the original object.
 * @param {Object} obj - Object to build tree on.
 * @param {Array} tree - Tree to build on 'obj'.
 * @param {*} [tail] - Any value to use as the tail.
 * @returns {Object} The same object passed as 'obj'.
 *
 * @example
 * createTree({}, ['fruit', 'color'], 'red'); // { fruit: { color: 'red' } }
 */
export function createTree(obj: any, tree: any[], tail?: any): any;
/**
 * Recursively clones an object's values.
 *
 * This works for simple objects containing simple types like strings, number, and dates. Complex objects containing
 * state may have issues.
 * @param {Object} obj - Object.
 * @returns {Object} Cloned object.
 * @since 1.0.7 - method clones more than just primitive values
 * @alias clone
 */
export function deepClone(obj: any): any;
/**
 * Recursively clones an object's values.
 *
 * This works for simple objects containing simple types like strings, number, and dates. Complex objects containing
 * state may have issues.
 * @param {Object} obj - Object.
 * @returns {Object} Cloned object.
 * @since 1.0.7 - method clones more than just primitive values
 * @alias clone
 */
export function clone(obj: any): any;
/**
 * Recursively transforms key/values in object, including array values.
 *
 * Also can act as a basic deep clone method.
 * @param {Object} obj - Object to transform.
 * @param {Object} transforms - Object containing transformation functions.
 * @param {function(string, number): *} [transforms.keys] - Function for transforming keys from 'obj'.
 * @param {function(*, number): *} [transforms.values] - Function for transforming values from 'obj'.
 * @param {number} [level=0] - Level of recursion, passed as the 2nd argument to a transform function.
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
 * });
 * // { fruit_apple: 'GREEN', fruit_orange: 'ORANGE', fruit_cherry: { color: 'RED' } }
 */
export function transformObj(obj: any, transforms: {
    keys?: (arg0: string, arg1: number) => any;
    values?: (arg0: any, arg1: number) => any;
}, level?: number): any;
/**
 * Creates an object from an array of keys.
 * @param {(string[] | number[])} keys - Array of keys.
 * @param {*} [value] - Value to assign to each key.
 * @returns {Object<(string | number), *>} Object with keys mapped from array.
 *
 * @example
 * arrToKeys(['a', 'b'], 0);
 * // { a: 0, b: 0 }
 */
export function arrToKeys(keys: (string[] | number[]), value?: any): any;
/**
 * Checks if a value is a number or not.
 * @param {*} value - Value to test.
 * @returns {boolean} Whether the value is a number or not.
 */
export function isNumber(value: any): boolean;
/**
 * Truncates a string with option to add trail at end.
 * @param {string} str - String.
 * @param {number} length - Length to trim to.
 * @param {string} [trail=''] - Trailing characters.
 * @returns {string} Truncated string.
 */
export function truncate(str: string, length: number, trail?: string): string;
/**
 * Chooses a form based on number.
 * @param {string} singular - Singular form.
 * @param {string} plural - Plural form.
 * @param {number} value - Test value.
 * @returns {string} Form based on value.
 */
export function basicPlural(singular: string, plural: string, value: number): string;
/**
 * Assigns values of object as keys.
 * @param {Object} obj - Object.
 * @returns {Object} Object with values mapped as keys.
 *
 * @example
 * valuesAsKeys({ a: 'apple' });
 * // { a: 'apple', 'apple': 'a' }
 */
export function valuesAsKeys(obj: any): any;
/**
 * Escapes a cell value in CSV.
 * @param {string} str - String.
 * @returns {string} Escaped string.
 */
export function escapeCSV(str: string): string;
/**
 * Escapes a string in RegExp.
 * @param {string} str - String.
 * @returns {string} Escaped string.
 */
export function escapeRegExp(str: string): string;
/**
 * Escapes text to use as strings in HTML format.
 * @param {string} text - Text to escape.
 * @returns {string} Escaped text.
 */
export function escapeHTML(text: string): string;
/**
 * Picks a number of items from an array at random.
 * @param {*[]} arr - Array to pick items from.
 * @param {number} num - Number of items to take.
 * @returns {*[]} N number of values taken from array at random.
 *
 * @example
 * takeNRandom([1, 2, 3, 4, 5], 3);
 * // [3, 5, 2]
 */
export function takeNRandom(arr: any[], num: number): any[];
/**
 * Executes a series of Promises in a series, where each Promise resolves before the next function is called.
 * @param {(function(): Promise<*>)[]} funcs - An array of functions where each function returns a Promise.
 * @returns {Promise<*[]>} Promise that resolves with an array containing results from each resolved Promise in series.
 *
 * @example
 * const urls = ['/url1', '/url2', '/url3'];
 * promiseSeries(urls.map(url => () => $.ajax(url)))
 *     .then(response => console.log(response));
 */
export function promiseSeries(funcs: (() => Promise<any>)[]): Promise<any[]>;
/**
 * Delays a promise.
 * @param {number} time - Time in ms to delay.
 * @param {*} [value] - Value to pass to resolve.
 * @returns {Promise} Promise that resolves after the given delay.
 * @since 1.0.1 - The time parameter comes first.
 */
export function delayPromise(time: number, value?: any): Promise<any>;
/**
 * Sleeps for a set amount of time.
 * @param {number} [time] - Time in ms to delay.
 * @returns {Promise} Promise that resolves after the given delay.
 */
export function sleep(time?: number): Promise<any>;
/**
 * Checks if A is equal to B.
 * @template T
 * @param {T} a - Value A.
 * @param {T} b - Value B.
 * @returns {boolean} Whether A is equal to B.
 */
export function deepEqual<T>(a: T, b: T): boolean;
/**
 * Removes elements from an object or array by value.
 * @param {(Object | *[])} item - Item to process.
 * @param {(* | *[])} value - Value or array of values to remove from item.
 * @returns {(Object | *[])} Object or array without the given values.
 *
 * @example
 * without({ name: 'cat', color: 'orange' }, ['orange']); // { name: 'cat' }
 *
 * @example
 * without(['cat', 'orange'], ['orange']); // ['cat']
 *
 * @example
 * // or using just a string
 * without(['cat', 'orange'], 'orange'); // ['cat']
 */
export function without(item: (any | any[]), value: (any | any[])): (any | any[]);
/**
 * Shortens a sentence-like string without cutting off the final word.
 * @param {string} str - String to shorten.
 * @param {number} maxLength - Max length of string.
 * @param {(string | RegExp)} seperator - Word seperator. If a RegExp is given, words will be seperated by a space.
 * @returns {string} Shortened string.
 *
 * @example
 * shorten('that cat is fat', 8); // 'that cat'
 *
 * @example
 * // custom seperator
 * shorten('123x456x789', 8, 'x'); // '123x456'
 */
export function shorten(str: string, maxLength: number, seperator?: (string | RegExp)): string;
/**
 * Rounds number to N decimal places.
 * @param {number} value - Value to round.
 * @param {number} places - Places to round to.
 * @returns {number} Rounded number.
 *
 * @example
 * roundN(4.344, 1); // 4.3
 */
export function roundN(value: number, places: number): number;
/**
 * Gets the closest value to a given number in the array.
 * @template T
 * @param {T[]} arr - Array of anything. If comparing non-numbers, a key should be given.
 * @param {number} num - Number to be closest to.
 * @param {(string | function(T, number): number)} [key] - Key or method to extract value from each item.
 * @returns {(T | undefined)} Closest value in array.
 *
 * @example
 * // gets the closest value in array to 6
 * closest([1, 5, 9], 6); // 5
 *
 * @example
 * // gets the city with the closest population to 11e5
 * const cities = [
 *     {
 *         name: 'New York',
 *         population: 86e5
 *     },
 *     {
 *         name: 'Tokyo',
 *         population: 138e5
 *     },
 *     {
 *         name: 'Mumbai',
 *         population: 124e5
 *     }
 * ];
 *
 * closest(cities, 11e5, 'population'); // { name: 'Mumbai', population: 12.4 }
 */
export function closest<T>(arr: T[], num: number, key?: string | ((arg0: T, arg1: number) => number)): T;
/**
 * Sorts an array in a chain.
 * @template T
 * @param {T[]} arr - Array to sort.
 * @param {(function(T, T): number)[]} funcs - Array of functions.
 * @returns {T[]} Sorted array.
 *
 * @example
 * chainSort([1, 5, 9, 4, 2], [
 *     (a, b) => {
 *         return a - b;
 *     }
 * ]);
 * // [1, 2, 4, 5, 9]
 */
export function chainSort<T>(arr: T[], funcs: ((arg0: T, arg1: T) => number)[]): T[];
//# sourceMappingURL=index.d.ts.map