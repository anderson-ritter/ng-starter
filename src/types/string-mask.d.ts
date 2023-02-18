declare module 'string-mask' {
  export function apply(value: any, pattern: any, options?: any): string;
  export function process(value: any, pattern: any, options?: any): any;
  export function validate(value: any, pattern: any, options?: any): boolean;
}
