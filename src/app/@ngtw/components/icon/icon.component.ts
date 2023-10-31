import { Component, Inject, Input } from '@angular/core';

import { NGTW_DEFAULT_ICON_TYPE } from './icon.providers';
import { IconType } from './icon.properties';

@Component({
  selector: 'ngtw-icon',
  template: `
    <span [class.material-symbols-outlined]="iconType === 'outlined'"
          [class.material-symbols-rounded]="iconType === 'rounded'"
          [class.material-symbols-sharp]="iconType === 'sharp'">
      {{icon}}
    </span>
  `,
  standalone: true,
  host: { 'class': 'flex' }
})
export class NgtwIconComponent {
  @Input() icon!: string;
  @Input() type?: IconType;

  get iconType() {
    return this.type ?? this.defaultIconType;
  }

  constructor(
    @Inject(NGTW_DEFAULT_ICON_TYPE) public defaultIconType: IconType
  ) { }
}
