declare module 'br-validations' {
  export function ie(uf: any): any;
  export namespace cnpj {
    function validate(c: any): boolean;
  }
  export namespace cpf {
    function validate(cpf: any): boolean;
  }
  export namespace pis {
    function validate(pis: any): boolean;
  }
}
