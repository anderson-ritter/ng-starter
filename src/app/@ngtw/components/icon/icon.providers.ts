import { InjectionToken } from '@angular/core';

import { IconType } from './icon.properties';

export const NGTW_DEFAULT_ICON_TYPE = new InjectionToken<IconType>('Default Icon Type', {
  providedIn: 'root',
  factory: () => 'outlined'
});
