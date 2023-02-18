import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
  name: '[cpf]'
})
export class CpfPipe implements PipeTransform {
  transform(value: string): string {

    if (!value) {
      return value;
    }

    const cleanValue = this.cleanValue(value)
      .padStart(11, '0')
      .slice(-11);

    return StringMask.apply(cleanValue, '000.000.000-00');
  }

  private cleanValue(value: string = ''): string {
    return (value ?? '').replace(/[^\d]/g, '');
  }
}
