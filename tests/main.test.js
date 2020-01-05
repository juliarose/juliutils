'use strict';

const juliutils = require('../');

it('yes (yes)', () => {
    expect(juliutils.yes('yes')).toBe(true);
});

it('yes (yup)', () => {
    expect(juliutils.yes('yup')).toBe(true);
});

it('yes (no)', () => {
    expect(juliutils.yes('no')).toBe(false);
});

it('no (no)', () => {
    expect(juliutils.no('no')).toBe(true);
});

it('no (nah)', () => {
    expect(juliutils.no('nah')).toBe(true);
});

it('no (yes)', () => {
    expect(juliutils.no('yes')).toBe(false);
});

it('withinNDaysOf (half a day behind, 1 day difference)', () => {
    const ONE_DAY = 24 * 60 * 60 * 1000;
    const date1 = new Date();
    // a half a day behind date1
    const date2 = new Date() - (ONE_DAY / 2);
    
    expect(juliutils.withinNDaysOf(date1, date2, 1)).toBe(true);
});

it('withinNDaysOf (2 days behind, 1 day difference)', () => {
    const ONE_DAY = 24 * 60 * 60 * 1000;
    const date1 = new Date();
    // 2 days behind date1
    const date2 = new Date() - (ONE_DAY * 2);
    
    expect(juliutils.withinNDaysOf(date1, date2, 1)).toBe(false);
});

it('printDate (July 7th, 2019)', () => {
    const date = new Date(2019, 6, 7);
    const formatted = juliutils.printDate(date);
    
    expect(formatted).toBe('7/7/2019');
});

it('printCSVDate (July 7th, 2019)', () => {
    const date = new Date(2019, 6, 7);
    const formatted = juliutils.printCSVDate(date);
    
    expect(formatted).toBe('2019/7/7');
});

it('omitEmpty', () => {
    const obj = {
        name: 'Coffee',
        flavor: null
    };
    const result = juliutils.omitEmpty(obj);
    
    expect(result).toEqual({
        name: 'Coffee'
    });
});

it('uniq (simple items)', () => {
    const arr = [
        1,
        1,
        2,
        3,
        1
    ];
    const result = juliutils.uniq(arr);
    
    expect(result).toEqual([
        1,
        2,
        3
    ]);
});

it('uniq (objects, string key)', () => {
    const arr = [
        {
            name: 'Root Beer'
        },
        {
            name: 'Ginger Ale'
        },
        {
            name: 'Root Beer'
        },
        {
            name: 'Pepsi'
        }
    ];
    const result = juliutils.uniq(arr, 'name');
    
    expect(result).toEqual([
        {
            name: 'Root Beer'
        },
        {
            name: 'Ginger Ale'
        },
        {
            name: 'Pepsi'
        }
    ]);
});

it('uniq (objects, function key)', () => {
    const arr = [
        {
            name: 'Root Beer'
        },
        {
            name: 'Ginger Ale'
        },
        {
            name: 'Root Beer'
        },
        {
            name: 'Pepsi'
        }
    ];
    const result = juliutils.uniq(arr, (item) => {
        return item.name;
    });
    
    expect(result).toEqual([
        {
            name: 'Root Beer'
        },
        {
            name: 'Ginger Ale'
        },
        {
            name: 'Pepsi'
        }
    ]);
});

it('difference', () => {
    const arr1 = [
        1,
        2,
        3
    ];
    const arr2 = [
        1,
        2
    ];
    const result = juliutils.difference(arr1, arr2);
    
    expect(result).toEqual([
        3
    ]);
});

it('partition', () => {
    const arr = [
        1,
        2,
        3
    ];
    const result = juliutils.partition(arr, (n) => {
        return n % 2 === 0;
    });
    
    expect(result).toEqual([
        [
            2
        ],
        [
            1,
            3
        ]
    ]);
});

it('mode ([1, 2, 2, 3])', () => {
    const arr = [
        1,
        2,
        2,
        3
    ];
    const result = juliutils.mode(arr);
    
    expect(result).toBe(2);
});

it('groupBy', () => {
    const arr = [
        {
            name: 'Cat',
            value: 1
        },
        {
            name: 'Dog',
            value: 1
        },
        {
            name: 'Cat',
            value: 2
        }
    ];
    const grouped = juliutils.groupBy(arr, 'name');
    
    expect(grouped).toEqual({
        'Cat': [
            {
                name: 'Cat',
                value: 1
            },
            {
                name: 'Cat',
                value: 2
            }
        ],
        'Dog': [
            {
                name: 'Dog',
                value: 1
            }
        ]
    });
});

it('indexBy', () => {
    const arr = [
        {
            name: 'Cat',
            value: 1
        },
        {
            name: 'Dog',
            value: 1
        },
        {
            name: 'Cat',
            value: 2
        }
    ];
    const grouped = juliutils.indexBy(arr, 'name');
    
    expect(grouped).toEqual({
        'Cat': {
            name: 'Cat',
            value: 1
        },
        'Dog': {
            name: 'Dog',
            value: 1
        }
    });
});

it('arrAverage', () => {
    const arr = [
        1,
        2,
        3
    ];
    const average = juliutils.arrAverage(arr);
    
    expect(average).toBe(2);
});

it('flatten', () => {
    const arr = [
        [
            1
        ],
        [
            2,
            [
                3
            ]
        ]
    ];
    const result = juliutils.flatten(arr);
    
    expect(result).toEqual([1, 2, [3]]);
});

it('flatten (deep)', () => {
    const arr = [
        [
            1
        ],
        [
            2,
            [
                3
            ]
        ]
    ];
    const result = juliutils.flatten(arr, true);
    
    expect(result).toEqual([1, 2, 3]);
});

it('compact', () => {
    const arr = [
        1,
        2,
        null,
        undefined,
        '',
        0
    ];
    const result = juliutils.compact(arr);
    
    expect(result).toEqual([1, 2]);
});

it('range', () => {
    const result = juliutils.range(1, 5);
    
    expect(result).toEqual([1, 2, 3, 4]);
});

it('randomString', () => {
    const result = juliutils.randomString(5);
    
    expect(result.length).toEqual(5);
});

it('pluck', () => {
    const obj = {
        name: 'Cat',
        value: 2
    };
    const result = juliutils.pluck(obj, ['name']);
    
    expect(result).toEqual({
        name: 'Cat'
    });
});

it('createTree', () => {
    const obj = {};
    
    juliutils.createTree(obj, ['fruit', 'color'], 'red'); 
    
    expect(obj).toEqual({
        fruit: {
            color: 'red'
        }
    });
});

it('transformObj', () => {
    const result = juliutils.transformObj({
        apple: 'Green',
        orange: 'Orange',
        cherry: {
            color: 'Red'
        }
    }, {
        keys: (key, level) => {
            return level === 0 ? `fruit_${key}` : key;
        },
        values: (value) => {
            return value.toUpperCase();
        }
    });
    
    expect(result).toEqual({
        fruit_apple: 'GREEN',
        fruit_orange: 'ORANGE',
        fruit_cherry: {
            color: 'RED'
        }
    });
});

it('deepClone', () => {
    const original = {
        apple: 'Green',
        orange: 'Orange',
        cherry: {
            color: 'Red'
        }
    };
    const clone = juliutils.deepClone(original);
    
    expect(original).toEqual(clone);
});

it('arrToKeys', () => {
    expect(juliutils.arrToKeys(['a', 'b'], 0)).toEqual({ a: 0, b: 0 });
});

it('isNumber (2)', () => {
    expect(juliutils.isNumber(2)).toEqual(true);
});

it('isNumber (null)', () => {
    expect(juliutils.isNumber(null)).toEqual(false);
});

it('isNumber (Infinity)', () => {
    expect(juliutils.isNumber(Infinity)).toEqual(false);
});

it('isNumber (\'\')', () => {
    expect(juliutils.isNumber('')).toEqual(false);
});

it('truncate', () => {
    expect(juliutils.truncate('There once was a cat', 10)).toBe('There once');
});

it('truncate (with trail)', () => {
    expect(juliutils.truncate('There once was a cat', 10, '...')).toBe('There once...');
});

it('valuesAsKeys', () => {
    expect(juliutils.valuesAsKeys({ a: 'apple' })).toEqual({ a: 'apple', 'apple': 'a' });
});

it('escapeCSV', () => {
    expect(juliutils.escapeCSV('that "cat"')).toBe('"that ""cat"""');
});

it('escapeHTML', () => {
    expect(juliutils.escapeHTML('<p>paragraph</p>')).toBe('&lt;p&gt;paragraph&lt;/p&gt;');
});

it('takeNRandom', () => {
    expect(juliutils.takeNRandom([1, 2, 3, 4, 5], 3).length).toBe(3);
});

it('deepEquality (1 and 1 are equal)', () => {
    const a = 1;
    const b = 1;
    
    expect(juliutils.deepEqual(a, b)).toBe(true);
});


it('deepEquality (1 and 2 are not equal)', () => {
    const a = 1;
    const b = 2;
    
    expect(juliutils.deepEqual(a, b)).toBe(false);
});

it('deepEquality (same dates are equal)', () => {
    // we use a timestamp here
    // otherwise there may be a delay between the date for the creation of each date
    const timestamp = 1576208370992;
    const a = new Date(timestamp);
    const b = new Date(timestamp);
    
    expect(juliutils.deepEqual(a, b)).toBe(true);
});

it('deepEquality (basic arrays are equal)', () => {
    const a = [
        1,
        2,
        'seed'
    ];
    const b = [
        1,
        2,
        'seed'
    ];
    
    expect(juliutils.deepEqual(a, b)).toBe(true);
});

it('deepEquality (basic arrays in different order are not equal)', () => {
    const a = [
        1,
        2,
        'cat'
    ];
    const b = [
        1,
        'cat',
        2
    ];
    
    expect(juliutils.deepEqual(a, b)).toBe(false);
});

it('deepEquality (basic objects are equal)', () => {
    const a = {
        a: 1,
        b: 'cat'
    };
    const b = {
        a: 1,
        b: 'cat'
    };
    
    expect(juliutils.deepEqual(a, b)).toBe(true);
});

// these still represent the same data
it('deepEquality (basic objects with different key orders are equal)', () => {
    const a = {
        a: 1,
        b: 'cat'
    };
    const b = {
        b: 'cat',
        a: 1
    };
    
    expect(juliutils.deepEqual(a, b)).toBe(true);
});

it('deepEquality (comprehensive comparison)', () => {
    const timestamp = 1576208370992;
    const a = {
        a: null,
        b: [
            1,
            2,
            3
        ],
        c: new Date(timestamp),
        d: {
            a: 'cat\'s',
            b: [
                'love',
                'milk'
            ],
            c: {
                a: 'yes, they do'
            }
        }
    };
    const b = {
        a: null,
        b: [
            1,
            2,
            3
        ],
        c: new Date(timestamp),
        d: {
            a: 'cat\'s',
            b: [
                'love',
                'milk'
            ],
            c: {
                a: 'yes, they do'
            }
        }
    };
    
    expect(juliutils.deepEqual(a, b)).toBe(true);
});

it('without (object test)', () => {
    const person = {
        name: 'Zack',
        residence: 'Tokyo',
        favorite_drink: 'Root Beer'
    };
    const personWithoutKeys = juliutils.without(person, [
        'residence',
        'favorite_drink'
    ]);
    
    expect(personWithoutKeys).toEqual({
        name: 'Zack'
    });
});

it('without (object test, excluded value passed as string)', () => {
    const person = {
        name: 'Zack',
        residence: 'Tokyo',
        favorite_drink: 'Root Beer'
    };
    const personWithoutKeys = juliutils.without(person, 'favorite_drink');
    
    expect(personWithoutKeys).toEqual({
        name: 'Zack',
        residence: 'Tokyo'
    });
});

it('without (array test)', () => {
    const person = [
        'Zack',
        'Tokyo',
        'Root Beer'
    ];
    const personWithoutKeys = juliutils.without(person, [
        'Zack',
        'Root Beer'
    ]);
    
    expect(personWithoutKeys).toEqual(['Tokyo']);
});

it('shorten', () => {
    const str = 'Some cats drink root beer.';
    const maxLength = 12;
    const shortened = juliutils.shorten(str, maxLength);
    
    expect(shortened).toBe('Some cats');
});

it('shorten (on index of last trimmed word', () => {
    const str = 'Some cats drink root beer.';
    const maxLength = 9;
    const shortened = juliutils.shorten(str, maxLength);
    
    expect(shortened).toBe('Some cats');
});

it('shorten (double spaces', () => {
    const str = 'Some  cats  drink  root  beer.';
    const maxLength = 12;
    const shortened = juliutils.shorten(str, maxLength);
    
    expect(shortened).toBe('Some  cats ');
});

it('shorten (custom seperator)', () => {
    const str = '123x456x789';
    const maxLength = 8;
    const shortened = juliutils.shorten(str, maxLength, 'x');
    
    expect(shortened).toBe('123x456');
});

it('shorten (long string)', () => {
    const str = 'Crunches that you do on the ground when you touch your toes';
    const maxLength = 20;
    const shortened = juliutils.shorten(str, maxLength);
    
    expect(shortened).toBe('Crunches that you do');
});

it('roundN', () => {
    const number = 3.4333;
    const rounded = juliutils.roundN(number, 2);
    
    expect(rounded).toBe(3.43);
});

it('closest', () => {
    const numbers = [1, 5, 9];
    const number = 6;
    const closestNumber = juliutils.closest(numbers, number);
    
    expect(closestNumber).toBe(5);
});

it('closest (string key)', () => {
    const cities = [
        {
            name: 'New York',
            population: 8.6
        },
        {
            name: 'Tokyo',
            population: 13.8
        },
        {
            name: 'Mumbai',
            population: 12.4
        }
    ];
    const population = 11;
    const closestCity = juliutils.closest(cities, population, 'population');
    
    expect(closestCity).toEqual({
        name: 'Mumbai',
        population: 12.4
    });
});

it('chainSort', () => {
    const numbers = [1, 5, 9, 4, 2];
    const sorted = juliutils.chainSort(numbers, [
        (a, b) => {
            return a - b;
        }
    ]);
    
    expect(sorted).toEqual([
        1,
        2,
        4,
        5,
        9
    ]);
});

it('chainSort (multiple)', () => {
    const items = [
        {
            name: 'Water',
            price: 0,
            orders: 4
        },
        {
            name: 'Wine',
            price: 3.99,
            orders: 2
        },
        {
            name: 'Salad',
            price: 2.49,
            orders: 1
        },
        {
            name: 'Bread',
            price: 2.49,
            orders: 3
        },
        {
            name: 'Chicken',
            price: 3.99,
            orders: 4
        }
    ];
    const sorted = juliutils.chainSort(items, [
        (a, b) => {
            // highest to lowest price
            return b.price - a.price;
        },
        (a, b) => {
            // highest to lowest orders
            return b.orders - a.orders;
        }
    ]);
    
    expect(sorted).toEqual([
        {
            name: 'Chicken',
            price: 3.99,
            orders: 4
        },
        {
            name: 'Wine',
            price: 3.99,
            orders: 2
        },
        {
            name: 'Bread',
            price: 2.49,
            orders: 3
        },
        {
            name: 'Salad',
            price: 2.49,
            orders: 1
        },
        {
            name: 'Water',
            price: 0,
            orders: 4
        }
    ]);
});