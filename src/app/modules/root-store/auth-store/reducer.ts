import { Actions, ActionTypes } from './actions';
import { AuthState, initialState } from './state';

export function featureReducer(state = initialState, action: Actions): AuthState {
  switch (action.type) {
    case ActionTypes.SIGNIN_SUCCESS: {
      const { token: stateToken } = state;
      const { token: actionToken } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        token: {
          ...stateToken,
          ...actionToken
        }
      };
    }
    case ActionTypes.SIGNIN_FAILURE:
    case ActionTypes.SIGNOUT: {
      return {
        isAuthenticated: false
      };
    }
    case ActionTypes.GET_USER_INFO_SUCCESS: {
      const { user: stateUser } = state;
      const { userInfo: actionUser } = action.payload;

      return {
        ...state,
        user: {
          ...stateUser,
          ...actionUser
        }
      };
    }
    case ActionTypes.GET_USER_INFO_FAILURE: {
      return {
        ...state,
        user: undefined
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
