export interface Sidebar {
  collapsed: boolean;
}

export interface Layout {
  sidebar: Sidebar;
}

export interface PaginationPage<T> {
  items: T[];
  totalCount: number;
}
