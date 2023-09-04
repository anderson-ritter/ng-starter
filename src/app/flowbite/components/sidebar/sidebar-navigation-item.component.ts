import { Component, ContentChild, Input } from '@angular/core';

import { SidebarService } from '../../services';
import { SidebarNavigationItemIconDirective } from './sidebar-navigation-item-icon.directive';

@Component({
  selector: 'tw-sidebar-navigation-item',
  template: `
    <a class="group flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
       [routerLink]="link"
       routerLinkActive="bg-gray-200 dark:bg-gray-700"
       [routerLinkActiveOptions]="{ exact: true }">

      <ng-content select="[navigationItemIcon]"></ng-content>

      <span class="flex-1 whitespace-nowrap"
            [class.ml-3]="!!navigationItemIcon"
            *ngIf="(sidebarService.$collapsed | async) === false">
        <ng-content></ng-content>
      </span>
      <tw-badge *ngIf="(sidebarService.$collapsed | async) === false && label">
        {{label}}
      </tw-badge>
    </a>
  `,
})
export class SidebarNavigationItemComponent {
  @Input() link?: string;
  @Input() label?: string;

  @ContentChild(SidebarNavigationItemIconDirective) navigationItemIcon!: SidebarNavigationItemIconDirective;

  constructor(readonly sidebarService: SidebarService) { }
}
