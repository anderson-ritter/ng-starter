import { Token, UserInfo } from './models';

export interface AuthState {
  isAuthenticated: boolean;
  token?: Token,
  user?: UserInfo
}

export const initialState: AuthState = {
  isAuthenticated: false
};
