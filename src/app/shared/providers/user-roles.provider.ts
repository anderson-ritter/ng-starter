import { InjectionToken } from '@angular/core';

export const USER_ROLES = new InjectionToken<string[]>('User Roles', {
  providedIn: 'root',
  factory: () => []
});
