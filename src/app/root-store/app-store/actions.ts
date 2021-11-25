import { Action } from '@ngrx/store';

export enum ActionTypes {
  THROW_ERROR = '[Core] Error',
  START_SMALL_BREAKPOINT = '[Core] Start Mobile Breakpoint',
  START_MEDIUM_BREAKPOINT = '[Core] Start Web Breakpoint',
  LAYOUT_CLOSE_SIDEBAR = '[Core] Layout Close Sidebar',
  LAYOUT_TOGGLE_SIDEBAR = '[Core] Layout Toggle Sidebar'
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
