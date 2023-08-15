export class Customer {
  customer_id!: string;
  name!: string;
  email!: string;
  birth_date!: string;

  constructor(customer?: Dictionary<any>) {
    if (customer) {
      return Object.assign(this, { ...customer });
    }
  }
}
