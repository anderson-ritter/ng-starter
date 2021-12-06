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
