import { Directive, ElementRef, forwardRef, HostListener, Input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  UntypedFormControl,
  ValidationErrors
} from '@angular/forms';
import * as BrV from 'br-validations';
import * as StringMask from 'string-mask';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[document]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DocumentMaskDirective),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DocumentMaskDirective),
      multi: true,
    }
  ],
})
export class DocumentMaskDirective implements ControlValueAccessor {
  @Input() public document!: string;

  // tslint:disable-next-line
  public onChange = (_: any) => { };
  public onTouch = () => { };

  public constructor(
    private elementRef: ElementRef
  ) { }

  // tslint:disable-next-line: cyclomatic-complexity
  public validate({ value }: UntypedFormControl): ValidationErrors | null {

    if (!value) {
      return null;
    }

    if (value.length <= 11) {
      return !BrV.cpf.validate(value)
        ? { invalidCpf: true }
        : null;
    }

    return !BrV.cnpj.validate(value)
      ? { invalidCnpj: true }
      : null;
  }

  private applyValueChanges(value: string): void {
    const cleanValue = this.cleanValue(value);

    const maskedValue = cleanValue.length > 11
      ? StringMask.apply(cleanValue.padStart(14, '0').slice(-14), '00.000.000\/0000-00')
      : StringMask.apply(cleanValue.padStart(11, '0').slice(-11), '000.000.000-00');

    this.elementRef.nativeElement.value = maskedValue.replace(/[^0-9]$/, '');
    this.onChange(cleanValue);
  }

  private cleanValue(value: string = ''): string {
    return (value || '').replace(/[^\d]/g, '').trim();
  }

  @HostListener('input', ['$event'])
  public onInput(e: KeyboardEvent): void {
    const el: HTMLInputElement = e.target as HTMLInputElement;
    this.applyValueChanges(el.value);
  }

  @HostListener('blur')
  public onBlur(): void {
    this.onTouch();
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
}
