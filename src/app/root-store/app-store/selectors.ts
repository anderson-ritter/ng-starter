import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AppLayout, AppState } from './state';

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

export const selectLayoutMobile: MemoizedSelector<object, boolean> = createSelector(
  selectAppState,
  (state: AppState): boolean => state.layout.smallDevice
);

export const selectLayoutSidebarOpened: MemoizedSelector<object, boolean> = createSelector(
  selectAppState,
  (state: AppState): boolean => state.layout.sidebarOpened
);
