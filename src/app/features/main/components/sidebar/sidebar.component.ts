import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SidebarStyle } from './../../../../shared/models/core';
import { SharedModule } from './../../../../shared/shared.module';

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

  @Input() sidebarStyle!: SidebarStyle;
  @Input() navigation: NavigationItem[] = [];

  @Output() styleToggle = new EventEmitter<void>();

  get isSmall() {
    return this.sidebarStyle === 'small';
  }

  get isLarge() {
    return this.sidebarStyle === 'large';
  }

  onToggleSize() {
    this.styleToggle?.emit();
  }
}
