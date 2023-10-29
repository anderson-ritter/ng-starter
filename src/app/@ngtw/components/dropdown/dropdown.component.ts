import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';

import { DropdownItemDirective } from './dropdown-item.directive';
import { DropdownPanel } from './dropdown-panel';

@Component({
  selector: "ngtw-dropdown",
  template: `
    <ng-template>
    <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
         (click)="closed.emit()">
        <ng-content select="[ngtwDropdownItem]"></ng-content>
      </div>
    </ng-template>
  `,
  host: {
    'role': 'menu',
  }
})
export class DropdownComponent implements DropdownPanel, AfterViewInit {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  /** All child MenuItem elements nested in this Menu. */
  @ContentChildren(DropdownItemDirective, { descendants: true }) items!: QueryList<DropdownItemDirective>;

  ngAfterViewInit(): void {
    console.log('items:', this.items);
  }
}
