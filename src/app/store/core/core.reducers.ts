import { ActionReducer, createReducer, on } from '@ngrx/store';

import { PageSize, SidebarMode } from './../../shared/models/layout';
import { closeSidebar, startMediumBreakpoint, startSmallBreakpoint, throwError, toggleSidebar } from './core.actions';
import { CoreState, initialState } from './core.state';

export const coreReducers: ActionReducer<CoreState> = createReducer(
  initialState,
  on(throwError, (state: CoreState, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(startSmallBreakpoint, (state: CoreState) => {
    return {
      ...state,
      layout: {
        ...state.layout,
        pageSize: PageSize.small,
        sidebarMode: SidebarMode.closed
      }
    };
  }),
  on(startMediumBreakpoint, (state: CoreState) => {
    return {
      ...state,
      layout: {
        ...state.layout,
        pageSize: PageSize.medium,
        sidebarMode: SidebarMode.opened
      }
    };
  }),
  on(closeSidebar, (state: CoreState) => {
    return {
      ...state,
      layout: {
        ...state.layout,
        sidebarMode: SidebarMode.opened
      }
    };
  }),
  on(toggleSidebar, (state: CoreState) => {
    const { layout } = state;

    let { sidebarMode } = layout;

    const map = new Map([
      [SidebarMode.opened, SidebarMode.closed],
      [SidebarMode.closed, SidebarMode.opened]
    ]);

    return {
      ...state,
      layout: {
        ...layout,
        sidebarMode: map.get(sidebarMode) || SidebarMode.opened
      }
    };
  })
);
