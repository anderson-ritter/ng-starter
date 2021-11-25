import { RouterReducerState } from '@ngrx/router-store';
import { AppStoreState } from './app-store';
import { RouterStateUrl } from './router-store/state';


export interface AppState {
  app: AppStoreState.AppState;
  router: RouterReducerState<RouterStateUrl>;
}
