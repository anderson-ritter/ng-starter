import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as StringMask from 'string-mask';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[date]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateMaskDirective),
      multi: true,
    }
  ]
})
export class DateMaskDirective {

  private datePattern = '00/00/0000';

  constructor(public elementRef: ElementRef) { }

  // tslint:disable-next-line
  public onChange = (_: any) => { };
  public onTouch = () => { };

  @HostListener('input', ['$event'])
  public onInput(e: KeyboardEvent): void {
    const el: HTMLInputElement = e.target as HTMLInputElement;
    this.applyValueChanges(el.value);
  }

  @HostListener('paste', ['$event'])
  public onPaste(e: any): void {
    const el: HTMLInputElement = e.target as HTMLInputElement;
    this.applyValueChanges(el.value);
  }

  /** It writes the value in the input */
  public async writeValue(inputValue: string): Promise<void> {
    if (inputValue === undefined) {
      inputValue = '';
    }

    this.applyValueChanges(inputValue);
  }

  // tslint:disable-next-line
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // tslint:disable-next-line
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  private applyValueChanges(value: string): void {
    const cleanValue = this.cleanValue(value);

    const maskedValue = StringMask
      .apply(cleanValue, this.datePattern)
      .trimEnd('.', '-', '/');

    this.elementRef.nativeElement.value = maskedValue;
    this.onChange(maskedValue);
  }

  private cleanValue(value?: string): string {
    return (value || '').replace(/[^\d]/g, '').trim().slice(0, 8);
  }
}
