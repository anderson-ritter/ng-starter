import { ActionReducer, createReducer, on } from '@ngrx/store';

import { setSidebarCollapsed, throwError, toggleSidebarCollapsed } from './core.actions';
import { CoreState, initialState } from './core.state';

export const coreReducers: ActionReducer<CoreState> = createReducer(
  initialState,
  on(throwError, (state: CoreState, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(toggleSidebarCollapsed, (state: CoreState) => {

    const { layout } = state;
    const { sidebar } = layout;
    const { collapsed } = sidebar;

    return {
      ...state,
      layout: {
        ...layout,
        sidebar: {
          ...sidebar,
          collapsed: !collapsed
        }
      }
    }
  }),
  on(setSidebarCollapsed, (state: CoreState, { collapsed }) => {

    const { layout } = state;
    const { sidebar } = layout;

    return {
      ...state,
      layout: {
        ...layout,
        sidebar: {
          ...sidebar,
          collapsed: collapsed
        }
      }
    }
  })
);
