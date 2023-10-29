import { booleanAttribute, Directive, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[ngtwDropdownItem]',
  exportAs: 'ngtwDropdownItem',
  host: {
    'role': 'menuitem',
    '[attr.aria-disabled]': 'disabled || null',
    'class': 'block px-4 py-2 text-sm text-gray-700'
  },
})
export class NgtwDropdownItemDirective implements OnDestroy {
  /** Emits when the menu item is destroyed. */
  protected readonly destroyed = new Subject<void>();

  /**  Whether the DropdownItem is disabled - defaults to false */
  @Input({ alias: 'ngtwDropdownItemDisabled', transform: booleanAttribute }) disabled: boolean = false;

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
