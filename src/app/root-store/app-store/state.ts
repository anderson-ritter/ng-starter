export interface AppLayout {
  smallDevice: boolean;
  sidebarOpened: boolean;
}

export interface AppState {
  error?: string;
  layout: AppLayout;
}

export const initialState: AppState = {
  layout: {
    smallDevice: false,
    sidebarOpened: false
  }
};
