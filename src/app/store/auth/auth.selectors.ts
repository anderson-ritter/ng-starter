import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { Token, UserInfo } from '../../shared/models/auth';
import { AppState } from './../../store';
import { AuthState } from './auth.state';

const getToken = (state: AuthState): Token | undefined => state.token;
const getUser = (state: AuthState): UserInfo | undefined => state.user;
const getIsAuthenticated = (state: AuthState): boolean => state.isAuthenticated;

export const selectAuthState: MemoizedSelector<AppState, AuthState> = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated: MemoizedSelector<AppState, boolean> = createSelector(
  selectAuthState,
  getIsAuthenticated
);

export const selectToken: MemoizedSelector<AppState, Token | undefined> = createSelector(
  selectAuthState,
  getToken
);

export const selectUser: MemoizedSelector<AppState, UserInfo | undefined> = createSelector(
  selectAuthState,
  getUser
);
