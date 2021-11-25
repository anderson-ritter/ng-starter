import { Action, ActionReducer, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { AppState } from './state';

export function debug(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const newState = reducer(state, action);
    console.log(`[DEBUG] action: ${action.type}`, {
      payload: (action as any).payload,
      oldState: state,
      newState
    });
    return newState;
  };
}

export const metaReducers: MetaReducer<any, Action>[] = [];

if (environment.debug) {
  metaReducers.unshift(debug);
}
