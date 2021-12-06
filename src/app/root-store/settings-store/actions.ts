import { Action } from '@ngrx/store';
import { Language, Theme } from '../../shared/models/settings';

export enum ActionTypes {
  CHANGE_THEME = '@app/settings/change-theme',
  CHANGE_LANGUAGE = '@app/settings/change-language',
}

export class ChangeThemeAction implements Action {
  readonly type = ActionTypes.CHANGE_THEME;
  constructor(public payload: { theme: Theme; }) { }
}

export class ChangeLanguageAction implements Action {
  readonly type = ActionTypes.CHANGE_LANGUAGE;
  constructor(public payload: { language: Language; }) { }
}

export type Actions =
  ChangeThemeAction
  | ChangeLanguageAction;
