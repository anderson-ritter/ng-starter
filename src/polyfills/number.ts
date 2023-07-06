import { isNaN, isNil } from 'lodash';

export { };

declare global {
  interface Number {
    formatDecimal(minimumIntegerDigits?: number): string | undefined;
  }

  interface NumberConstructor {
    isNil(value: number | null | undefined): boolean;
    getValueOrDefault(value: number | null | undefined, defaultValue: number): number;
  }
}

Number.prototype.formatDecimal = function (minimumIntegerDigits: number = 2) {
  return new Intl.NumberFormat('en-us', { minimumFractionDigits: minimumIntegerDigits, useGrouping: false }).format(+this);
}

Number.isNil = (value: any) => { return isNil(value) || isNaN(value); };

Number.getValueOrDefault = (value: any, defaultValue: any) => {
  if (isNil(value) || isNaN(value)) {
    return defaultValue;
  }

  return value;
}

