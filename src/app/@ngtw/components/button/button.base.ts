import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  booleanAttribute,
  Directive,
  ElementRef,
  inject,
  Input,
  NgZone,
  numberAttribute,
  OnDestroy,
  OnInit
} from '@angular/core';

import { ButtonColors, ButtonSizes, NGTW_BUTTON_HOST_SELECTOR_CLASS_MAP } from './button.properties';

@Directive()
export class NgtwButtonBase implements OnInit, AfterViewInit, OnDestroy {
  private readonly _focusMonitor = inject(FocusMonitor);

  private _disabled: boolean = false;

  @Input() color: ButtonColors = 'info';
  @Input() size?: ButtonSizes = 'md';

  @Input({ transform: booleanAttribute })
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: any) {
    this._disabled = value;
  }

  constructor(
    public _elementRef: ElementRef<HTMLElement>,
    public _platform: Platform,
    public _ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this._ngZone.runOutsideAngular(() => {
      this._elementRef.nativeElement.addEventListener('click', this._haltDisabledEvents);
    });

    const element = this._elementRef.nativeElement;
    const classList = element.classList;

    // For each of the variant selectors that is present in the button's host
    // attributes, add the correct corresponding tailwindcss classes.
    for (const { attribute, classes } of NGTW_BUTTON_HOST_SELECTOR_CLASS_MAP) {
      if (element.hasAttribute(attribute)) {
        classList.add(...classes[this.color]);
      }
    }
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._elementRef.nativeElement.removeEventListener('click', this._haltDisabledEvents);
  }

  _focus(_origin: FocusOrigin = 'program', options?: FocusOptions): void {
    if (_origin) {
      this._focusMonitor.focusVia(this._elementRef.nativeElement, _origin, options);
    } else {
      this._elementRef.nativeElement.focus(options);
    }
  }

  _haltDisabledEvents = (event: Event): void => {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };
}

@Directive()
export class NgtwAnchorBase extends NgtwButtonBase implements OnInit, OnDestroy {
  @Input({
    transform: (value: unknown) => {
      return value == null ? undefined : numberAttribute(value);
    },
  })
  tabIndex?: number;
}
