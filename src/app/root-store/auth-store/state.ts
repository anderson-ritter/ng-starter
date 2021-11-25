export interface AuthData {
  username: string;
  givenName: string;
  accessToken: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  authData?: AuthData;
}

export const initialState: AuthState = {
  isAuthenticated: false
};
