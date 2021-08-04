interface Array<T> {
    slice(start?: number, end?: number): T[];
    pop(): T;
    push(...items: T[]): number;
    sort(func?:(one: T, two: T) => number): T[];
    indexOf(item: T, index?: number): number;
    every(callback: (currentValue: T, index?: number, array?: T[]) => boolean): boolean;
    map(callback: (currentValue: T, index?: number, array?: T[]) => T[]): T[];
    filter(callback: (element: T, index?: number, array?: T[]) => boolean): T[];
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}

interface IMap<T, U> {
    entries(): IterableIterator<[T, U]>;
    forEach(callbackFn: (value: U, key: T, map: IMap<T, U>)=> void): void;
    get(key: T): U;
    has(key: T): boolean;
    keys(): IterableIterator<T>;
    set(key: T, value?: U): IMap<T, U>;
    values(): IterableIterator<U>;
}

