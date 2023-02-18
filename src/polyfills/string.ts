import * as _ from 'lodash';
import * as moment from 'moment';

export { };

declare global {
  interface String {
    format(...replacements: string[]): string;
    trimEnd(...char: string[]): string;
    reverse(): string;
    capitalize(): string;
    isValidDate(): boolean;
    toDate(format?: string): Date | null;
    removeDiacritics(): string;
  }
}

String.prototype.format = function () {
  const args = arguments;
  const sprintfRegex = /\{(\d+)\}/g;

  const sprintf = (match: any, num: number) => {
    return num in args ? args[num] : match;
  };

  return this.replace(sprintfRegex, sprintf);
};

String.prototype.trimEnd = function () {
  let text = `${this}`;

  if (!text)
    return text;

  const args = Array.from(arguments)
    .map(arg => `\\${arg}`)
    .join('');

  const pattern = new RegExp('[' + args + ']+$', 'g');

  return text.replace(pattern, '');
}

String.prototype.reverse = function () {
  const str = this;

  const split = str.split("");
  const reverseArray = split.reverse();

  return reverseArray.join("");
}

String.prototype.capitalize = function () {
  return _.capitalize(`${this}`);
};

String.prototype.toDate = function (format?: string): Date | null {

  if (!this) {
    return null;
  }

  const _this = `${this}`;
  const pattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  if (!pattern.test(_this) && _this.isValidDate()) {
    return new Date(_this);
  }

  const _moment = moment(_this, format);

  if (_moment.isValid()) {
    return _moment.toDate();
  }

  return null;
};

String.prototype.isValidDate = function () {
  const date = new Date(`${this}`);
  return moment(date).isValid();
};

String.prototype.removeDiacritics = function () {
  const value = this;

  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
};
