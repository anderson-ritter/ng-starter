import { Token, UserInfo } from '../../shared/models/auth';

export interface AuthState {
  token?: Token,
  user?: UserInfo
}

export const initialState: AuthState = {};
