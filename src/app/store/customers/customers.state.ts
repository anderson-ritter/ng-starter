import { PaginationPage } from '../../shared/models/core';
import { Customer } from '../../shared/models/customers';

export interface CustomersState {
  page: PaginationPage<Customer>;
  selected?: Customer;
}

export const initialState: CustomersState = {
  page: {
    items: [],
    totalCount: 0
  }
};
