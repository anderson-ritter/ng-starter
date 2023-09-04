import { Directive } from '@angular/core';

import generateID from '../../../utils/id-generator';
import { AddonProperties } from '../form-field.properties';
import { BaseInputDirective } from './base-input.directive';

@Directive({
  selector: '[flowbiteAddon]',
})
export class AddonDirective extends BaseInputDirective {
  override _id = generateID('flowbite-addon');

  override handleClasses(): void {
    this._classes = AddonProperties;
  }
}
