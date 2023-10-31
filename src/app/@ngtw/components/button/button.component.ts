import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { NgtwRippleDirective } from '../ripple/ripple.directive';
import { NgtwAnchorBase, NgtwButtonBase } from './button.base';
import { NGTW_ANCHOR_HOST, NGTW_BUTTON_HOST } from './button.properties';

@Component({
  selector: `
    button[ngtw-button], button[ngtw-outline-button]
  `,
  template: `
    <ng-content></ng-content>
  `,
  host: NGTW_BUTTON_HOST,
  exportAs: 'ngtwButton',
  hostDirectives: [
    NgtwRippleDirective
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgtwButtonComponent extends NgtwButtonBase { }

@Component({
  selector: `a[ngtw-button], a[ngtw-outline-button]`,
  exportAs: 'ngtwButton, ngtwAnchor',
  host: NGTW_ANCHOR_HOST,
  template: `
    <ng-content></ng-content>
  `,
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgtwAnchor extends NgtwAnchorBase { }
