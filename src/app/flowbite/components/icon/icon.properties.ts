import { InjectionToken } from '@angular/core';

export type IconType = 'outlined' | 'rounded' | 'sharp';

export const DEFAULT_ICON_TYPE = new InjectionToken<IconType>('Default Icon Type', {
  providedIn: 'root',
  factory: () => 'outlined'
});
