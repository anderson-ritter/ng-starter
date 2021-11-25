import { Actions, ActionTypes } from './actions';
import { AppState, initialState } from './state';

export function featureReducer(state = initialState, action: Actions): AppState {
  switch (action.type) {
    case ActionTypes.THROW_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case ActionTypes.START_SMALL_BREAKPOINT: {

      const { layout } = state;

      return {
        ...state,
        layout: {
          ...layout,
          smallDevice: true,
          sidebarOpened: false
        }
      };
    }
    case ActionTypes.START_MEDIUM_BREAKPOINT: {

      const { layout } = state;

      return {
        ...state,
        layout: {
          ...layout,
          smallDevice: false,
          sidebarOpened: true
        }
      };
    }
    case ActionTypes.LAYOUT_CLOSE_SIDEBAR: {

      const { layout } = state;

      return {
        ...state,
        layout: {
          ...layout,
          sidebarOpened: false
        }
      };
    }
    case ActionTypes.LAYOUT_TOGGLE_SIDEBAR: {

      const { layout } = state;

      return {
        ...state,
        layout: {
          ...layout,
          sidebarOpened: !layout.sidebarOpened
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
