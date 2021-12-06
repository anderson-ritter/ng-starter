import { Action } from '@ngrx/store';
import { Language, Theme } from './../../shared/models/app';

export enum ActionTypes {
  THROW_ERROR = '@app/error',
  START_SMALL_BREAKPOINT = '@app/layout/start-mobile-breakpoint',
  START_MEDIUM_BREAKPOINT = '@app/layout/start-web-breakpoint',
  LAYOUT_CLOSE_SIDEBAR = '@app/layout/close-sidebar',
  LAYOUT_TOGGLE_SIDEBAR = '@app/layout/toggle-sidebar',
  CHANGE_THEME = '@app/settings/change-theme',
  CHANGE_LANGUAGE = '@app/settings/change-language',
}

export class ThrowErrorAction implements Action {
  readonly type = ActionTypes.THROW_ERROR;
  constructor(public payload: { error: any; }) { }
}

export class StartSmallBreakpointAction implements Action {
  readonly type = ActionTypes.START_SMALL_BREAKPOINT;
  constructor() { }
}

export class StartMediumBreakpointAction implements Action {
  readonly type = ActionTypes.START_MEDIUM_BREAKPOINT;
  constructor() { }
}

export class LayoutCloseSidebarAction implements Action {
  readonly type = ActionTypes.LAYOUT_CLOSE_SIDEBAR;
  constructor() { }
}

export class LayoutToggleSidebarAction implements Action {
  readonly type = ActionTypes.LAYOUT_TOGGLE_SIDEBAR;
  constructor() { }
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
  ThrowErrorAction
  | StartSmallBreakpointAction
  | StartMediumBreakpointAction
  | LayoutCloseSidebarAction
  | LayoutToggleSidebarAction
  | ChangeThemeAction
  | ChangeLanguageAction;
