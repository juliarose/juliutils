/// <reference types="juliutils" />

export as namespace juliutils;
export function yes(str: string): boolean;
export function yay(str: string): boolean;
export function no(str: string): boolean;
export function nay(str: string): boolean;
export function withinNDaysOf(date1: Date, date2: Date, days?: number): boolean;
export function printDate(date: Date, seperator?: string): string;
export function printCSVDate(date: Date): string;
export function omitEmpty(obj: Object): Object;
export function uniq(arr: any[], filter: string | ((value: any, i?: number, array?: any[]) => boolean)): any[];
export function difference(arr1: any[], arr2: any[]): any[]
export function partition(arr: any[], method: (value: any, i?: number) => boolean): any[][]
export function mode(numbers: number[]): number
export function groupBy(arr: any[], key: string | ((item: any, i?: number) => any)): any;
export function indexBy(arr: any[], key: string | ((item: any, i?: number) => any)): any;
export function arrAverage(numbers: number[]): number;
export function flatten(arr: any[], deep?: boolean): any[];
export function compact(arr: any[]): any[];
export function flattenCompact(arr: any[], deep?: boolean): any[];
export function range(low: number, high: number): number[];
export function randomStr(length: number): string;
export function pluck(obj: Object, ...keys: (string | string[])[]): Object;
export function pickKeys(obj: Object, ...keys: (string | string[])[]): Object;
export function createTree(obj: Object, tree: string[], ender?: any): Object;
export function transformObj(obj: Object, transforms: any, level?: number): Object;
export function deepClone(obj: Object): Object;
export function clone(obj: Object): Object;
export function arrToKeys(keys: string, value: any): any;
export function isNumber(value: any): boolean;
export function truncate(str: string, length: number, trail?: string): string;
export function valuesAsKeys(obj: Object): Object;
export function escapeCSV(str: string): string;
export function escapeRegExp(str: string): string;
export function escapeHTML(str: string): string;
export function takeNRandom(arr: any[], num: number): any[];
export function promiseSeries(funcs: ((previousResolvedValue?: any) => Promise<any> )[]): Promise<any[]>;
export function delayPromise(time: number, value?: any): Promise<any>;
export function deepEqual(a: any, b: any): boolean;
export function without(item: Object | any[], value: any): Object | any[];
export function shorten(str: string, maxLength: number, seperator: string): string;
export function roundN(value: number, places: number): number;
export function closest(arr: any[], num: number, key: string | ((value: any, i?: number) => number)): any;
export function chainSort(arr: any[], funcs: ((a: any, b: any) => boolean)[]): any[];