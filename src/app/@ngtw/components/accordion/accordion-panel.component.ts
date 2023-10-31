import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngtw-accordion-panel',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  standalone: true
})
export class NgtwAccordionPanelComponent {
  @Input() open?: boolean;

  setOpen(open: boolean) {
    this.open = open;
  }
}
