import { Injectable } from '@angular/core';

const APP_PREFIX = 'ng-returns-';

@Injectable()
export class LocalStorageService {
  constructor() { }

  static loadInitialState() {
    return Object.keys(localStorage)
      .filter(key => key.includes(APP_PREFIX))
      .reduce((state: any, storageKey) => {
        const stateKeys = storageKey
          .replace(APP_PREFIX, '')
          .toLowerCase()
          .split('.')
          .map(key =>
            key
              .split('-')
              .map((token, index) =>
                index === 0
                  ? token
                  : token.charAt(0).toUpperCase() + token.slice(1)
              )
              .join('')
          );

        let currentStateRef = state;

        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            const storageItem = localStorage.getItem(storageKey);

            if (!!storageItem && storageItem !== "undefined") {
              currentStateRef[key] = JSON.parse(storageItem);
              return;
            }
          }

          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });

        return state;
      }, {});
  }

  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key.toUpperCase()}`, JSON.stringify(value));
  }

  getItem(key: string) {
    const value = localStorage.getItem(`${APP_PREFIX}${key.toUpperCase()}`);

    if (!!value) {
      return JSON.parse(value);
    }

    return '';
  }

  getItemAs<T>(key: string) {
    return this.getItem(key) as T;
  }

  removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key.toUpperCase()}`);
  }
}
