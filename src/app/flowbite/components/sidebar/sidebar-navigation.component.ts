import { Component, Input } from '@angular/core';

@Component({
  selector: 'tw-sidebar-navigation',
  template: `
    <div class="flex flex-col gap-2 w-full" [ngClass]="extraClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class SidebarNavigationComponent {
  @Input() extraClass = '';
}
