import { Data, Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AppState } from './../../store';
import { RouterStateUrl } from './router.state';

const getRouterStateUrl = (routerState: RouterReducerState<RouterStateUrl>): RouterStateUrl | undefined => {
  return routerState?.state;
};

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const selectRouteStateUrl: MemoizedSelector<AppState, RouterStateUrl | undefined> = createSelector(
  selectRouterState,
  (routerState: RouterReducerState<RouterStateUrl>): RouterStateUrl | undefined => {
    return getRouterStateUrl(routerState);
  }
);

export const selectQueryParams: MemoizedSelector<AppState, Params | undefined> = createSelector(
  selectRouterState,
  (routerState: RouterReducerState<RouterStateUrl>): Params | undefined => {
    const state = getRouterStateUrl(routerState);
    return state?.queryParams;
  }
);

export const selectRouteParams: MemoizedSelector<AppState, Params | undefined> = createSelector(
  selectRouterState,
  (routerState: RouterReducerState<RouterStateUrl>): Params | undefined => {
    const state = getRouterStateUrl(routerState);
    return state?.params;
  }
);

export const selectRouteData: MemoizedSelector<AppState, Data | undefined> = createSelector(
  selectRouterState,
  (routerState: RouterReducerState<RouterStateUrl>): Data | undefined => {
    const state = getRouterStateUrl(routerState);
    return state?.data;
  }
);

export const selectRouteUrl: MemoizedSelector<AppState, string | undefined> = createSelector(
  selectRouterState,
  (routerState: RouterReducerState<RouterStateUrl>): string | undefined => {
    const state = getRouterStateUrl(routerState);
    return state?.url;
  }
);
