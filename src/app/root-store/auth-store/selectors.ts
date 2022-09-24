import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { AuthData, AuthState } from './state';

export const selectAuthState: MemoizedSelector<object, AuthState> = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated: MemoizedSelector<object, boolean> = createSelector(
  selectAuthState,
  (state: AuthState): boolean => state.isAuthenticated
);

export const selectAuthData: MemoizedSelector<object, AuthData | undefined> = createSelector(
  selectAuthState,
  (state: AuthState): AuthData | undefined => state.authData
);
