import * as moment from 'moment';

export { };

declare global {
  interface Date {
    addYears(years: number): Date;
    addMonths(months: number): Date;
    addDays(days: number): Date;
    addSeconds(seconds: number): Date;
    date(): Date;
    isToday(): boolean;
    clone(): Date;
    isWeekend(): boolean;
    equalsTo(date: Date): boolean;
    format(format?: string): string | null;
    valid(): boolean;
    diff(from: Date, unitOfTime?: diff, precise?: boolean): number;
  }

  type diff = (
    'year' | 'years' | 'y' |
    'month' | 'months' | 'M' |
    'week' | 'weeks' | 'w' |
    'day' | 'days' | 'd' |
    'hour' | 'hours' | 'h' |
    'minute' | 'minutes' | 'm' |
    'second' | 'seconds' | 's' |
    'millisecond' | 'milliseconds' | 'ms' |
    'quarter' | 'quarters' | 'Q'
  );
}

Date.prototype.format = function (format?: string): string | null {

  if (!this) {
    return null;
  }

  const _moment = moment(this);

  if (!!format) {
    return _moment.format(format);
  }

  return _moment.format();
};

Date.prototype.valid = function (): boolean {

  if (!this) {
    return false;
  }

  return moment(this).isValid();
};

Date.prototype.addYears = function (years: number): Date {
  if (!years) {
    return this;
  }

  return moment(this)
    .add(years, 'y')
    .toDate();
};

Date.prototype.addMonths = function (months: number): Date {
  if (!months) {
    return this;
  }

  return moment(this)
    .add(months, 'M')
    .toDate();
};

Date.prototype.addDays = function (days: number): Date {
  if (!days) {
    return this;
  }

  return moment(this)
    .add(days, 'd')
    .toDate();
};

Date.prototype.addSeconds = function (seconds: number): Date {
  if (!seconds) {
    return this;
  }

  return moment(this)
    .add(seconds, 's')
    .toDate();
};

Date.prototype.date = function (): Date {
  const date = this;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

Date.prototype.isToday = function (): boolean {
  const today = new Date();
  return this.equalsTo(today);
};

Date.prototype.clone = function (): Date {
  return new Date(+this);
};

Date.prototype.isWeekend = function (): boolean {
  return this.getDay() === 0 || this.getDay() === 6;
};

Date.prototype.equalsTo = function (date: Date): boolean {
  return date
    && this.getFullYear() === date.getFullYear()
    && this.getMonth() === date.getMonth()
    && this.getDate() === date.getDate();
};

Date.prototype.diff = function (from: Date, unitOfTime?: diff, precise?: boolean): number {
  return moment(this).diff(from, unitOfTime, precise);
};
