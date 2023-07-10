import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { Layout, Sidebar } from './../../shared/models/core';
import { AppState } from './../../store';
import { CoreState } from './core.state';

const getError = (state: CoreState): string | undefined => state.error;
const getLayout = (state: CoreState): Layout => state.layout;
const getSidebar = (_: CoreState, layout: Layout): Sidebar => layout.sidebar;

export const selectCoreState: MemoizedSelector<AppState, CoreState> = createFeatureSelector<CoreState>('core');

export const selectAppError: MemoizedSelector<AppState, string | undefined> = createSelector(
  selectCoreState,
  getError
);

export const selectLayout: MemoizedSelector<AppState, Layout> = createSelector(
  selectCoreState,
  getLayout
);

export const selectSidebar: MemoizedSelector<AppState, Sidebar> = createSelector(
  selectCoreState,
  selectLayout,
  getSidebar
);

