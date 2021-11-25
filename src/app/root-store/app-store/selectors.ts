import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppLayout, AppState, PageSize, SidebarMode } from './state';

const getError = (state: AppState): string | undefined => state.error;

export const selectAppState: MemoizedSelector<object, AppState> = createFeatureSelector<AppState>('app');

export const selectAppError: MemoizedSelector<object, string | undefined> = createSelector(
  selectAppState,
  getError
);

export const selectLayout: MemoizedSelector<object, AppLayout> = createSelector(
  selectAppState,
  (state: AppState): AppLayout => state.layout
);

export const selectLayoutPageSize: MemoizedSelector<object, PageSize> = createSelector(
  selectAppState,
  (state: AppState): PageSize => state.layout.pageSize
);

export const selectLayoutSidebarMode: MemoizedSelector<object, SidebarMode> = createSelector(
  selectAppState,
  (state: AppState): SidebarMode => state.layout.sidebarMode
);
