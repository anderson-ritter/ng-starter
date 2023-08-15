import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { PaginationPage } from '../../shared/models/core';
import { Customer } from '../../shared/models/customers';
import { AppState } from './../../store';
import { CustomersState } from './customers.state';

export const selectCustomersFeature: MemoizedSelector<AppState, CustomersState> =
  createFeatureSelector<CustomersState>('customers');

export const selectCustomersPage: MemoizedSelector<AppState, PaginationPage<Customer>> = createSelector(
  selectCustomersFeature,
  ({ page }: CustomersState): PaginationPage<Customer> => page
);

export const selectSelectedCustomer: MemoizedSelector<AppState, Customer | undefined> = createSelector(
  selectCustomersFeature,
  ({ selected }: CustomersState): Customer | undefined => selected
);

