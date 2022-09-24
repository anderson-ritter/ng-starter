import * as _ from 'lodash';
import { ListIteratee, Many, ValueIteratee } from 'lodash';

export { };

declare global {
  type Predicate<T> = (arg: T) => boolean;

  interface Array<T> {
    chunk(size?: number): T[][];
    sum(): number;
    sumBy(iteratee?: ((value: T) => number) | string): number;
    groupBy(iteratee?: ValueIteratee<T>): Dictionary<T[]>;
    uniqBy(iteratee?: ValueIteratee<T>): T[];
    sortBy(...iteratees: Array<Many<ListIteratee<T>>>): T[];
    firstOrDefault<T>(predicate: Predicate<T>): T;
    random(): T;
  }

  interface Dictionary<T> {
    [index: string]: T;
  }
}

Array.prototype.chunk = function (size?: number): any[][] {
  return _.chunk(this, size);
};

Array.prototype.sum = function (): number {
  return _.sum(this);
};

Array.prototype.sumBy = function (iteratee?: ((value: any) => number) | string): number {
  return _.sumBy(this, iteratee);
};

Array.prototype.groupBy = function (iteratee?: ValueIteratee<any>): Dictionary<any[]> {
  return _.groupBy(this, iteratee);
};

Array.prototype.uniqBy = function (iteratee: ValueIteratee<any>): any[] {
  return _.uniqBy(this, iteratee);
};

Array.prototype.sortBy = function (...iteratees: Array<Many<ListIteratee<any>>>): any[] {
  return _.sortBy(this, ...iteratees);
};

Array.prototype.firstOrDefault = function <T>(predicate: Predicate<T>) {
  return this.reduce((accumulator: T, currentValue: T) => {

    if (!accumulator && predicate(currentValue)) {
      accumulator = currentValue;
    }

    return accumulator;
  }, null);
};

Array.prototype.random = function () {
  return this[Math.floor((Math.random() * this.length))];
}
