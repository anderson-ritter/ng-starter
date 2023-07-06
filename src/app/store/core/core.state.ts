import { AppLayout, PageSize, SidebarMode } from './../../shared/models/layout';

export interface CoreState {
  error?: string;
  layout: AppLayout;
}

export const initialState: CoreState = {
  layout: {
    pageSize: PageSize.medium,
    sidebarMode: SidebarMode.opened
  }
};
