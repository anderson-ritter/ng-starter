import {
  booleanAttribute,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  NgZone,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[dropdownItem]',
  exportAs: 'dropdownItem',
  host: {
    'role': 'menuitem',
    '[attr.aria-disabled]': 'disabled || null'
  },
})
export class DropdownItemDirective implements OnDestroy {
  /** Emits when the menu item is destroyed. */
  protected readonly destroyed = new Subject<void>();

  /**  Whether the DropdownItem is disabled - defaults to false */
  @Input({ alias: 'dropdownItemDisabled', transform: booleanAttribute }) disabled: boolean = false;

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
