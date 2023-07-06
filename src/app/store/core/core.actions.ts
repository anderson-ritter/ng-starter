import { createAction, props } from '@ngrx/store';

export const actionKey = '[Core]';

export const throwError = createAction(
  `${actionKey} Throw Error`,
  props<{ error: any; }>()
);

export const startSmallBreakpoint = createAction(
  `${actionKey} Start Small Breakpoint`
);

export const startMediumBreakpoint = createAction(
  `${actionKey} Start Medium Breakpoint`
);

export const closeSidebar = createAction(
  `${actionKey} Close Sidebar`
);

export const toggleSidebar = createAction(
  `${actionKey} Toggle Sidebar`
);
