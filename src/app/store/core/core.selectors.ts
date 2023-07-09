import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AppState } from './../../store';
import { CoreState } from './core.state';

const getError = (state: CoreState): string | undefined => state.error;

export const selectAppState: MemoizedSelector<AppState, CoreState> = createFeatureSelector<CoreState>('core');

export const selectAppError: MemoizedSelector<AppState, string | undefined> = createSelector(
  selectAppState,
  getError
);
