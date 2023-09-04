import { Directive, HostBinding, Input } from '@angular/core';

import { FloatingLabelType, InputPrefixType, InputProperties, InputSize, InputValidation } from '../form-field.properties';
import { BaseInputDirective } from './base-input.directive';

@Directive({
  selector: 'input[flowbiteInput]',
})
export class InputDirective extends BaseInputDirective {
  _size: InputSize = 'default';
  _disabled: boolean | string = false;
  _validation: InputValidation | null = null;
  _floatingLabelType: FloatingLabelType | null = null;
  _prefixType: InputPrefixType | null = null;

  @HostBinding('attr.disabled') get isDisabled() {
    return this._disabled || null;
  }

  @Input() set disabled(disabled: boolean | string) {
    this._disabled = disabled;
    this.handleClasses();
  }

  @Input() set size(size: InputSize) {
    this._size = size;
    this.handleClasses();
  }

  @Input() set validation(validation: InputValidation | null) {
    this._validation = validation;
    this.handleClasses();
  }

  @Input() set floatingLabelType(floatingLabelType: FloatingLabelType | null) {
    this._floatingLabelType = floatingLabelType;
    this.handleClasses();
  }

  @Input() set prefixType(type: InputPrefixType | null) {
    this._prefixType = type;
    this.handleClasses();
  }

  override handleClasses(): void {
    this._classes = this._classes ?? [];

    if (this._floatingLabelType) {
      this._classes.push(...InputProperties.floatingLabel[this._floatingLabelType].base);

      if (this._validation) {
        this._classes.push(...InputProperties.floatingLabel[this._floatingLabelType].validation[this._validation])

      } else if (this._disabled) {
        this._classes.push(...InputProperties.floatingLabel[this._floatingLabelType].disabled);

      } else {
        this._classes.push(...InputProperties.floatingLabel[this._floatingLabelType].default)
      }

      if (this._size) {
        this._classes.push(...InputProperties.floatingLabel[this._floatingLabelType].size[this._size])
      }

      return;
    }

    this._classes.push(...InputProperties.default.base);

    if (this._validation) {
      this._classes.push(...InputProperties.default.validation[this._validation])

    } else if (this._disabled) {
      this._classes.push(...InputProperties.default.disabled);

    } else {
      this._classes.push(...InputProperties.default.default)
    }

    if (this._prefixType === 'addon') {
      this._classes.push(...InputProperties.default.addon);

    } else if (this._prefixType === 'icon') {
      this._classes.push(...InputProperties.default.icon);
    }

    if (this._size) {
      this._classes.push(...InputProperties.default.size[this._size])
    }
  }
}
