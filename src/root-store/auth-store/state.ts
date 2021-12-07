export interface AuthData {
  username?: string;
  name?: string;
  tokenType?: string;
  accessToken?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  authData: AuthData;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  authData: {}
};
