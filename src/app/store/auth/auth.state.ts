import { Token, UserInfo } from '../../shared/models/auth';

export interface AuthState {
  isAuthenticated: boolean;
  token?: Token,
  user?: UserInfo
}

export const initialState: AuthState = {
  isAuthenticated: false
};
