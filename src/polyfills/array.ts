import * as _ from 'lodash';
import { ListIteratee, Many, ValueIteratee } from 'lodash';

export { };

declare global {
  type Predicate<T> = (arg: T) => boolean;
  type Iteratee<T> = (arg: T) => number;
  type Dictionary<T> = { [key: string]: T; }

  interface Array<T> {
    chunk(size: number): T[][];
    compact(): T[];
    difference(values: T[]): T[];
    drop(n?: number): T[];
    dropRight(n?: number): T[];
    first(n?: number): T | T[];
    flatDeep(): T[];
    fromPairs<P>(): Dictionary<P>;
    intersection(...arrays: T[][]): T[];
    takeRight(n?: number): T[];
    last(n?: number): T | T[];
    without(...values: T[]): T[];
    sum(): number;
    sumBy(iteratee?: Iteratee<T> | string): number;
    groupBy(iteratee?: Iteratee<T>): Dictionary<T[]>;
    uniqBy(iteratee?: Iteratee<T>): T[];
    sortBy(...iteratees: Array<Many<ListIteratee<T>>>): T[];
  }
}

Array.prototype.chunk = function (size: number): any[][] {
  return this.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

Array.prototype.compact = function (): any[] {
  return this.filter(Boolean);
}

Array.prototype.difference = function (values: any[]): any[] {
  return this.filter(t => !values.includes(t))
}

Array.prototype.drop = function (n: number = 1): any[] {
  return this.slice(n);
}

Array.prototype.dropRight = function (n: number = 1): any[] {
  return this.slice(0, -Math.abs(n));
}

Array.prototype.first = function (n: number = 1): any | any[] {
  if (n === 1) {
    [...this].shift();
  }

  return this.slice(0, n);
}

Array.prototype.flatDeep = function (): any[] {
  return this.flat(Infinity);
};

Array.prototype.fromPairs = function (): Dictionary<any> {
  return Object.fromEntries(this);
};

Array.prototype.intersection = function (...arrays: any[][]): any[] {
  arrays = [...this, ...arrays];
  return arrays.reduce((a, b) => a.filter(c => b.includes(c)));
};

Array.prototype.takeRight = function (n: number = 1): any[] {
  if (n < 1) {
    return [];
  }

  return this.slice(-Math.abs(n));
}

Array.prototype.last = function (n: number = 1): any | any[] {
  if (n === 1) {
    [...this].pop();
  }

  return this.slice(0, -Math.abs(n));
}

Array.prototype.without = function (...values: any[]): any[] {
  return this.filter(value => {
    return !values.includes(value);
  })
}

Array.prototype.sum = function (): number {
  return _.sum(this);
};

Array.prototype.sumBy = function (iteratee?: Iteratee<any> | string): number {
  return _.sumBy(this, iteratee);
};

Array.prototype.groupBy = function (iteratee?: Iteratee<any>): Dictionary<any[]> {
  return _.groupBy(this, iteratee);
};

Array.prototype.uniqBy = function (iteratee: Iteratee<any>): any[] {
  return _.uniqBy(this, iteratee);
};

Array.prototype.sortBy = function (...iteratees: Array<Many<ListIteratee<any>>>): any[] {
  return _.sortBy(this, ...iteratees);
};
