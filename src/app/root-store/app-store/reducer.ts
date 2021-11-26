import { Actions, ActionTypes } from './actions';
import { AppState, initialState, PageSize, SidebarMode } from './state';

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
          pageSize: PageSize.small,
          sidebarMode: SidebarMode.closed
        }
      };
    }
    case ActionTypes.START_MEDIUM_BREAKPOINT: {
      const { layout } = state;

      return {
        ...state,
        layout: {
          ...layout,
          pageSize: PageSize.medium,
          sidebarMode: SidebarMode.opened
        }
      };
    }
    case ActionTypes.LAYOUT_CLOSE_SIDEBAR: {
      const { layout } = state;

      return {
        ...state,
        layout: {
          ...layout,
          sidebarMode: SidebarMode.opened
        }
      };
    }
    case ActionTypes.LAYOUT_TOGGLE_SIDEBAR: {
      const { layout } = state;

      let { sidebarMode } = layout;

      const map = new Map([
        [SidebarMode.opened, SidebarMode.closed],
        [SidebarMode.closed, SidebarMode.opened]
      ]);

      return {
        ...state,
        layout: {
          ...layout,
          sidebarMode: map.get(sidebarMode) || SidebarMode.opened
        }
      };
    }
    case ActionTypes.CHANGE_THEME: {
      return {
        ...state,
        settings: {
          theme: action.payload.theme
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
