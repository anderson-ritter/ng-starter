import { isNil } from 'lodash';

export { };

declare global {
  interface ObjectConstructor {
    isNil(value: any | null | undefined): boolean;
    getValueOrDefault<T>(value: any | null | undefined, defaultValue: T): T;
  }
}

Object.isNil = (value: any) => { return isNil(value); };

Object.getValueOrDefault = (value: any, defaultValue: any) => {
  if (isNil(value)) {
    return defaultValue;
  }

  return value;
}
