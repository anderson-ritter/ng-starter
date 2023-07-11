import { Component, Input } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { SidebarStyle } from './../../../../shared/models/core';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [SharedModule],
  template: `
    <li>
      <a class="flex items-center justify-start gap-3 w-full h-10 px-3 rounded hover:bg-gray-800 hover:text-gray-300"
        [routerLink]="routerLink"
        routerLinkActive="bg-gray-800 text-gray-300">
        <lucide-icon [name]="icon"></lucide-icon>
        <span *ngIf="isLarge">{{label | translate}}</span>
      </a>
    </li>
  `
})
export class NavItemComponent {
  @Input() routerLink!: string;
  @Input() icon!: string;
  @Input() label!: string;
  @Input() sidebarStyle!: SidebarStyle;

  get isSmall() {
    return this.sidebarStyle === 'small';
  }

  get isLarge() {
    return this.sidebarStyle === 'large';
  }
}
