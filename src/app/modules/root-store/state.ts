import { RouterReducerState } from '@ngrx/router-store';

import { AuthStoreState } from './auth-store';
import { CoreStoreState } from './core-store';
import { JokeStoreState } from './joke-store';
import { RouterStateUrl } from './router-store/state';
import { SettingsStoreState } from './settings-store';

export interface AppState {
  auth: AuthStoreState.AuthState;
  core: CoreStoreState.CoreState;
  jokes: JokeStoreState.JokeState;
  router: RouterReducerState<RouterStateUrl>;
  settings: SettingsStoreState.SettingsState;
}
