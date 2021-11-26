import { Action } from '@ngrx/store';
import { Language, Theme } from './../../shared/models/app';

export enum ActionTypes {
  THROW_ERROR = '[App] Error',
  START_SMALL_BREAKPOINT = '[App] Start Mobile Breakpoint',
  START_MEDIUM_BREAKPOINT = '[App] Start Web Breakpoint',
  LAYOUT_CLOSE_SIDEBAR = '[App] Layout Close Sidebar',
  LAYOUT_TOGGLE_SIDEBAR = '[App] Layout Toggle Sidebar',
  CHANGE_THEME = '[App] Change Theme',
  CHANGE_LANGUAGE = '[App] Change Language',
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
