import { RouterReducerState } from '@ngrx/router-store';

import { CoreState } from './core';
import { MessagesState } from './messages';
import { RouterStateUrl } from './router';
import { SettingsState } from './settings';

export interface AppState {
  messages?: MessagesState;
  settings?: SettingsState;
  core?: CoreState,
  router?: RouterReducerState<RouterStateUrl>;
}
