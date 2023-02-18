import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
  name: '[cnpj]'
})
export class CnpjPipe implements PipeTransform {
  transform(value: string): string {

    if (!value) {
      return value;
    }

    const cleanValue = this.cleanValue(value)
      .padStart(14, '0')
      .slice(-14);

    return StringMask.apply(cleanValue, '00.000.000\/0000-00');
  }

  private cleanValue(value: string = ''): string {
    return (value ?? '').replace(/[^\d]/g, '');
  }
}
