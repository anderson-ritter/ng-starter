import { Actions, ActionTypes } from './actions';
import { initialState, SettingsState } from './state';

export function featureReducer(state = initialState, action: Actions): SettingsState {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME: {
      return {
        ...state,
        theme: action.payload.theme
      };
    }
    case ActionTypes.CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload.language
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
