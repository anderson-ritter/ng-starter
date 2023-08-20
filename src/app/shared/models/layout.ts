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
