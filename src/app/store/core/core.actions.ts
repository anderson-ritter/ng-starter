import { createAction, props } from '@ngrx/store';

export const actionKey = '[Core]';

export const throwError = createAction(
  `${actionKey} Throw Error`,
  props<{ error: any; }>()
);

export const toggleSidebarStyle = createAction(
  `${actionKey} Toggle Sidebar Style`
);
