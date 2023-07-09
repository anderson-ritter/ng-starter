import { Component, Input } from '@angular/core';

import { SharedModule } from './../../../../shared/shared.module';

export type SidebarSize = 'small' | 'large';

export interface NavigationItem {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  @Input() size: SidebarSize = 'small';
  @Input() navigation: NavigationItem[] = [];

  get isSmall() {
    return this.size === 'small';
  }

  get isLarge() {
    return this.size === 'large';
  }

  onToggleSize() {
    const map = new Map<SidebarSize, SidebarSize>([
      ['small', 'large'],
      ['large', 'small']
    ]);

    this.size = map.get(this.size) ?? 'small';
  }
}
