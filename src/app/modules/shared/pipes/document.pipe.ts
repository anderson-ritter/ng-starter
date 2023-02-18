import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
  name: '[document]'
})
export class DocumentPipe implements PipeTransform {
  transform(value: string): string {

    if (!value) {
      return value;
    }

    const cleanValue = this.cleanValue(value);

    return cleanValue.length > 11
      ? StringMask.apply(cleanValue.padStart(14, '0').slice(-14), '00.000.000\/0000-00')
      : StringMask.apply(cleanValue.padStart(11, '0').slice(-11), '000.000.000-00');
  }

  private cleanValue(value: string = ''): string {
    return (value ?? '').replace(/[^\d]/g, '');
  }
}
