import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AppLayout, CoreState, PageSize, SidebarMode } from './state';

const getError = (state: CoreState): string | undefined => state.error;

export const selectAppState: MemoizedSelector<object, CoreState> = createFeatureSelector<CoreState>('core');

export const selectAppError: MemoizedSelector<object, string | undefined> = createSelector(
  selectAppState,
  getError
);

export const selectLayout: MemoizedSelector<object, AppLayout> = createSelector(
  selectAppState,
  (state: CoreState): AppLayout => state.layout
);

export const selectLayoutPageSize: MemoizedSelector<object, PageSize> = createSelector(
  selectAppState,
  (state: CoreState): PageSize => state.layout.pageSize
);

export const selectLayoutSidebarMode: MemoizedSelector<object, SidebarMode> = createSelector(
  selectAppState,
  (state: CoreState): SidebarMode => state.layout.sidebarMode
);
