import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';

import { DropdownPanel } from './dropdown-panel';

@Component({
  selector: "ngtw-dropdown",
  template: `
    <ng-template>
      <div (click)="closed.emit()" class="dropdown-content">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `
})
export class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();
}
