import { Actions, ActionTypes } from './actions';
import { SettingsState, initialState } from './state';

export function featureReducer(state = initialState, action: Actions): SettingsState {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME: {
      const { settings } = state;

      return {
        ...state,
        settings: {
          ...settings,
          theme: action.payload.theme
        }
      };
    }
    case ActionTypes.CHANGE_LANGUAGE: {
      const { settings } = state;

      return {
        ...state,
        settings: {
          ...settings,
          language: action.payload.language
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
