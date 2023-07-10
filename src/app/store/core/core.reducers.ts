import { ActionReducer, createReducer, on } from '@ngrx/store';

import { SidebarStyle } from './../../shared/models/core';
import { throwError, toggleSidebarStyle } from './core.actions';
import { CoreState, initialState } from './core.state';

export const coreReducers: ActionReducer<CoreState> = createReducer(
  initialState,
  on(throwError, (state: CoreState, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(toggleSidebarStyle, (state: CoreState) => {

    const { layout } = state;
    const { sidebar } = layout;
    const { style } = sidebar;

    const map = new Map<SidebarStyle, SidebarStyle>([
      ['small', 'large'],
      ['large', 'small']
    ]);

    const newStyle = map.get(style) ?? 'small';

    return {
      ...state,
      layout: {
        ...layout,
        sidebar: {
          ...sidebar,
          style: newStyle
        }
      }
    }
  })
);
