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

    const { core: coreState } = newState;
    const { settings: settingsState } = newState;

    if ([`${INIT}`, `${UPDATE}`].includes(action.type)) {
      const { core, settings } = LocalStorageService.loadStateFromLocalStorage();

      newState = {
        ...newState,
        core: {
          ...coreState,
          ...core
        },
        settings: {
          ...settingsState,
          ...settings
        }
      };
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
