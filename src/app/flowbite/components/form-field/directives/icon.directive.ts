import { Directive } from '@angular/core';

import generateID from '../../../utils/id-generator';
import { IconProperties } from '../form-field.properties';
import { BaseInputDirective } from './base-input.directive';

@Directive({
  selector: '[flowbiteIcon]',
})
export class IconDirective extends BaseInputDirective {
  override _id = generateID('flowbite-icon');

  override handleClasses(): void {
    this._classes = IconProperties;
  }
}
