import { Component, Inject, Input } from '@angular/core';

import { DEFAULT_ICON_TYPE } from './icon.providers';
import { IconType } from './icon.types';

@Component({
  selector: 'ngtw-icon',
  template: `
    <span [class.material-symbols-outlined]="iconType === 'outlined'"
          [class.material-symbols-rounded]="iconType === 'rounded'"
          [class.material-symbols-sharp]="iconType === 'sharp'">
      {{icon}}
    </span>
  `,
  host: { 'class': 'flex' }
})
export class IconComponent {
  @Input() icon!: string;
  @Input() type?: IconType;

  get iconType() {
    return this.type ?? this.defaultIconType;
  }

  constructor(
    @Inject(DEFAULT_ICON_TYPE) public defaultIconType: IconType
  ) { }
}
