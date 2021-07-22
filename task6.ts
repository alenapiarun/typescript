interface Array<T> {
    slice(start?: number, end?: number): T[];
    pop(): T;
    push(items: T[]): number;
    sort(func?: void): T[];
    indexOf(item: T, index?: number): number;
    every(func: void): boolean;
    map(func: void): T[];
    filter(func: void): T[];
    reduce(func: void): T;
}
