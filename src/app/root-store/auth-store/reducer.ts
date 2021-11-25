import { Actions, ActionTypes } from './actions';
import { AuthState, initialState } from './state';

export function featureReducer(state = initialState, action: Actions): AuthState {
  switch (action.type) {
    case ActionTypes.SIGNIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        authData: {
          username: action.payload.username,
          givenName: action.payload.givenName,
          accessToken: action.payload.accessToken,
        }
      };
    }
    case ActionTypes.SIGNIN_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        authData: undefined
      };
    }
    case ActionTypes.SIGNOUT: {
      return {
        ...state,
        isAuthenticated: false,
        authData: undefined
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
