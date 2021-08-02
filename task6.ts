interface Array<T> {
    slice(start?: number, end?: number): T[];
    pop(): T;
    push(...items: T[]): number;
    sort(func?:(one: T, two: T) => 1 | 0 | -1): T[];
    indexOf(item: T, index?: number): number;
    every(callback: (currentValue: T, index?: number, array?: T[]) => boolean): boolean;
    map(callback: (currentValue: T, index?: number, array?: T[]) => T[]): T[];
    filter(callback: (element: T, index?: number, array?: T[]) => boolean): T[];
    reduce(func: (accumulator: T, currentValue: T, index?: number, array?: T[]) => T): T;
}
