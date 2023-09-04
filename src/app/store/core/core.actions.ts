import { createAction, props } from '@ngrx/store';

export const actionKey = '[Core]';

export const throwError = createAction(
  `${actionKey} Throw Error`,
  props<{ error: any; }>()
);

export const toggleSidebarCollapsed = createAction(
  `${actionKey} Toggle Sidebar Collapsed`
);

export const setSidebarCollapsed = createAction(
  `${actionKey} Set Sidebar Collapsed`,
  props<{ collapsed: boolean; }>()
);
