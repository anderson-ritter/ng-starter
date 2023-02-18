import { Action } from '@ngrx/store';

export enum ActionTypes {
  THROW_ERROR = '@app/error',
  START_SMALL_BREAKPOINT = '@app/layout/start-small-breakpoint',
  START_MEDIUM_BREAKPOINT = '@app/layout/start-medium-breakpoint',
  LAYOUT_CLOSE_SIDEBAR = '@app/layout/close-sidebar',
  LAYOUT_TOGGLE_SIDEBAR = '@app/layout/toggle-sidebar'
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

export type Actions =
  ThrowErrorAction
  | StartSmallBreakpointAction
  | StartMediumBreakpointAction
  | LayoutCloseSidebarAction
  | LayoutToggleSidebarAction;
