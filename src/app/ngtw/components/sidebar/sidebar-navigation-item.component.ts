import { Component, ContentChild, Input, OnInit } from '@angular/core';

import { SidebarService } from '../../services';
import { SidebarNavigationItemIconDirective } from './sidebar-navigation-item-icon.directive';

@Component({
  selector: 'ngtw-sidebar-navigation-item',
  template: `
    <a class="group flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
       [routerLink]="link"
       routerLinkActive="bg-gray-200 dark:bg-gray-700"
       [routerLinkActiveOptions]="{ exact: true }">

      <ng-content select="[navigationItemIcon]"></ng-content>

      <span class="flex-1 whitespace-nowrap"
            [class.ml-3]="!!navigationItemIcon"
            *ngIf="!collapsed">
        <ng-content></ng-content>
      </span>
      <ngtw-badge *ngIf="!collapsed && label">
        {{label}}
      </ngtw-badge>
    </a>
  `,
})
export class SidebarNavigationItemComponent implements OnInit {
  collapsed!: boolean;

  @Input() link?: string;
  @Input() label?: string;

  @ContentChild(SidebarNavigationItemIconDirective) navigationItemIcon!: SidebarNavigationItemIconDirective;

  constructor(readonly sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.$collapsed
      .subscribe(collapsed => {
        this.collapsed = collapsed;
      })
  }
}
