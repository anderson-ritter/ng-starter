import { Actions, ActionTypes } from './actions';
import { CoreState, initialState, PageSize, SidebarMode } from './state';

export function featureReducer(state = initialState, action: Actions): CoreState {
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
    default: {
      return {
        ...state
      };
    }
  }
}
