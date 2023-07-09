import { ActionReducer, createReducer, on } from '@ngrx/store';

import { throwError } from './core.actions';
import { CoreState, initialState } from './core.state';

export const coreReducers: ActionReducer<CoreState> = createReducer(
  initialState,
  on(throwError, (state: CoreState, { error }) => {
    return {
      ...state,
      error
    };
  })
);
