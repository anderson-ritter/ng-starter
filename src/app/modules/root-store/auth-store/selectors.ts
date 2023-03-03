import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { Token, UserInfo } from './models';
import { AuthState } from './state';

const getToken = (state: AuthState): Token | undefined => state.token;
const getUser = (state: AuthState): UserInfo | undefined => state.user;
const getIsAuthenticated = (state: AuthState): boolean => state.isAuthenticated;

export const selectAuthState: MemoizedSelector<object, AuthState> = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated: MemoizedSelector<object, boolean> = createSelector(
  selectAuthState,
  getIsAuthenticated
);

export const selectToken: MemoizedSelector<object, Token | undefined> = createSelector(
  selectAuthState,
  getToken
);

export const selectUser: MemoizedSelector<object, UserInfo | undefined> = createSelector(
  selectAuthState,
  getUser
);
