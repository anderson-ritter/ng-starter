import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AppLayout, PageSize, SidebarMode } from './../../shared/models/layout';
import { AppState } from './../../store';
import { CoreState } from './core.state';

const getError = (state: CoreState): string | undefined => state.error;

export const selectAppState: MemoizedSelector<AppState, CoreState> = createFeatureSelector<CoreState>('core');

export const selectAppError: MemoizedSelector<AppState, string | undefined> = createSelector(
  selectAppState,
  getError
);

export const selectLayout: MemoizedSelector<AppState, AppLayout> = createSelector(
  selectAppState,
  (state: CoreState): AppLayout => state.layout
);

export const selectLayoutPageSize: MemoizedSelector<AppState, PageSize> = createSelector(
  selectAppState,
  (state: CoreState): PageSize => state.layout.pageSize
);

export const selectLayoutSidebarMode: MemoizedSelector<AppState, SidebarMode> = createSelector(
  selectAppState,
  (state: CoreState): SidebarMode => state.layout.sidebarMode
);
