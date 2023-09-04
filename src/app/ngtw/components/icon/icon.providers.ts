import { InjectionToken } from '@angular/core';

import { IconType } from './icon.types';

export const DEFAULT_ICON_TYPE = new InjectionToken<IconType>('Default Icon Type', {
  providedIn: 'root',
  factory: () => 'outlined'
});
