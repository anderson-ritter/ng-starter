import * as _ from 'lodash';

export { };

declare global {
  interface ObjectConstructor {
    isNil(value: any | null | undefined): boolean;
    getValueOrDefault<T>(value: any | null | undefined, defaultValue: T): T;
  }
}

Object.isNil = (value: any) => { return _.isNil(value); };

Object.getValueOrDefault = (value: any, defaultValue: any) => {
  if (_.isNil(value)) {
    return defaultValue;
  }

  return value;
}
