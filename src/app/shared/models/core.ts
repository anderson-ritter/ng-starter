export type SidebarStyle = 'small' | 'large';

export interface Sidebar {
  style: SidebarStyle;
}

export interface Layout {
  sidebar: Sidebar;
}
