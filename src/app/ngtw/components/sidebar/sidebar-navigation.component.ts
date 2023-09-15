import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngtw-sidebar-navigation',
  template: `
    <div class="flex flex-col gap-1 w-full" [ngClass]="extraClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class SidebarNavigationComponent {
  @Input() extraClass = '';
}
