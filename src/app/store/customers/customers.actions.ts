import { createAction, props } from '@ngrx/store';

import { Customer } from '../../shared/models/customers';
import { SortDirection } from './../../shared/models/goal';

export const actionKey = '[Customers]';

export const listCustomers = createAction(
  `${actionKey} Read Customers`,
  props<{ pageIndex?: number; pageSize?: number; sortBy?: string; sortDirection?: SortDirection; }>()
);

export const listCustomersSuccess = createAction(
  `${actionKey} Read Customers Success`,
  props<{ items: Customer[]; totalCount: number; }>()
);

export const listCustomersFailure = createAction(
  `${actionKey} Read Customers Failure`,
  props<{ messages: string[]; }>()
);

export const readCustomer = createAction(
  `${actionKey} Read Customer`,
  props<{ id: string; }>()
);

export const readCustomerSuccess = createAction(
  `${actionKey} Read Customer Success`,
  props<{ customer: Customer; }>()
);

export const readCustomerFailure = createAction(
  `${actionKey} Read Customer Failure`,
  props<{ messages: string[]; }>()
);

export const addCustomer = createAction(
  `${actionKey} Add Customer`,
  props<{ customer: Customer; }>()
);

export const addCustomerSuccess = createAction(
  `${actionKey} Add Customer Success`,
  props<{ customer: Customer; }>()
);

export const addCustomerFailure = createAction(
  `${actionKey} Add Customer Failure`,
  props<{ messages: string[]; }>()
);

export const updateCustomer = createAction(
  `${actionKey} Update Customer`,
  props<{ customer: Customer; }>()
);

export const updateCustomerSuccess = createAction(
  `${actionKey} Update Customer Success`,
  props<{ customer: Customer; }>()
);

export const updateCustomerFailure = createAction(
  `${actionKey} Update Customer Failure`,
  props<{ messages: string[]; }>()
);

export const deleteCustomer = createAction(
  `${actionKey} Delete Customer`,
  props<{ id: string; }>()
);

export const deleteCustomerSuccess = createAction(
  `${actionKey} Delete Customer Success`,
  props<{ id: string; }>()
);

export const deleteCustomerFailure = createAction(
  `${actionKey} Delete Customer Failure`,
  props<{ messages: string[]; }>()
);
