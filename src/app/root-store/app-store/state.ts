import { Settings as AppSettings } from './../../shared/models/app';
export interface AppLayout {
  pageSize: PageSize;
  sidebarMode: SidebarMode;
}

export enum PageSize {
  small,
  medium,
  large
}

export enum SidebarMode {
  opened,
  closed
}

export interface AppState {
  error?: string;
  layout: AppLayout;
  settings: AppSettings;
}

export const initialState: AppState = {
  layout: {
    pageSize: PageSize.medium,
    sidebarMode: SidebarMode.opened
  },
  settings: {
    theme: 'default-theme',
    language: 'pt-br'
  }
};
