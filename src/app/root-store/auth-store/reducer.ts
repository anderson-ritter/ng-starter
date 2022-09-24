import { Actions, ActionTypes } from './actions';
import { AuthState, initialState } from './state';

export function featureReducer(state = initialState, action: Actions): AuthState {
  switch (action.type) {
    case ActionTypes.SIGNIN_SUCCESS: {
      const { authData } = state;

      return {
        ...state,
        isAuthenticated: true,
        authData: {
          ...authData,
          tokenType: action.payload.token.token_type,
          accessToken: action.payload.token.access_token,
        }
      };
    }
    case ActionTypes.SIGNIN_FAILURE: {
      return {
        ...state,
        isAuthenticated: false,
        authData: {}
      };
    }
    case ActionTypes.SIGNOUT: {
      return {
        isAuthenticated: false,
        authData: {}
      };
    }
    case ActionTypes.GET_USER_INFO_SUCCESS: {
      const { authData } = state;

      return {
        ...state,
        authData: {
          ...authData,
          username: action.payload.userInfo.preferred_username,
          name: action.payload.userInfo.name
        }
      };
    }
    case ActionTypes.GET_USER_INFO_FAILURE: {
      const { authData } = state;

      return {
        ...state,
        authData: {
          ...authData,
          username: undefined,
          name: undefined
        }
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
