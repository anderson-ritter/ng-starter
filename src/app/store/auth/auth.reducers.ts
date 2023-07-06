import { ActionReducer, createReducer, on } from '@ngrx/store';

import { fetchUserInfoFailure, fetchUserInfoSuccess, signInFailure, signInSuccess, signOut } from './auth.actions';
import { AuthState, initialState } from './auth.state';

export const authReducers: ActionReducer<AuthState> = createReducer(
  initialState,
  on(signInSuccess, (state: AuthState, { token }) => {
    return {
      ...state,
      isAuthenticated: true,
      token
    };
  }),
  on(signInFailure, signOut, () => {
    return {
      isAuthenticated: false
    };
  }),
  on(fetchUserInfoSuccess, (state: AuthState, { userInfo }) => {
    return {
      ...state,
      user: userInfo
    };
  }),
  on(fetchUserInfoFailure, (state: AuthState) => {
    return {
      ...state,
      user: undefined
    };
  })
);
