import { Action, ActionReducer, INIT, MetaReducer, UPDATE } from '@ngrx/store';

import { LocalStorageService } from '../shared/services';
import { environment } from './../../environments/environment';
import { AppState } from './../store';

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

export function initStateFromSessionStorage(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    let newState = reducer(state, action);

    if ([`${INIT}`, `${UPDATE}`].includes(action.type)) {
      newState = { ...newState, ...LocalStorageService.loadStateFromLocalStorage() };
    }

    return newState;
  };
}

export const metaReducers: MetaReducer<any, Action>[] = [
  initStateFromSessionStorage
];

if (environment.debug) {
  metaReducers.unshift(debug);
}
