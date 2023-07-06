import { createAction, props } from '@ngrx/store';

import { Language, Theme } from './../../shared/models/settings';

export const actionKey = '[Settings]';

export const changeTheme = createAction(
  `${actionKey} Change Theme`,
  props<{ theme: Theme }>()
);

export const changeLanguage = createAction(
  `${actionKey} Change Language`,
  props<{ language: Language }>()
);
