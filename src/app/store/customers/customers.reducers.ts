import { ActionReducer, createReducer, on } from '@ngrx/store';

import {
  addCustomerSuccess,
  deleteCustomerSuccess,
  listCustomersSuccess,
  readCustomerSuccess,
  updateCustomerSuccess
} from './customers.actions';
import { CustomersState, initialState } from './customers.state';

export const customersReducers: ActionReducer<CustomersState> = createReducer(
  initialState,
  on(readCustomerSuccess, (state: CustomersState, { customer }) => {
    return {
      ...state,
      selected: customer
    };
  }),
  on(listCustomersSuccess, (state: CustomersState, { items, totalCount }) => {
    return {
      ...state,
      page: {
        items,
        totalCount
      }
    };
  }),
  on(addCustomerSuccess, (state: CustomersState, { customer }) => {
    const { page: { items, totalCount } } = state;

    return {
      ...state,
      page: {
        items: [...items, customer],
        totalCount: totalCount + 1
      }
    };
  }),
  on(updateCustomerSuccess, (state: CustomersState, { customer }) => {
    const { page: { items: currentItems } } = state;

    const items = [...currentItems];
    const index = items.findIndex(c => c.customer_id === customer.customer_id);

    if (~index) {
      items.splice(index, 1, customer);
    }

    return {
      ...state,
      page: {
        ...state.page,
        items
      }
    };
  }),
  on(deleteCustomerSuccess, (state: CustomersState, { id }) => {
    const { page: { items: currentItems, totalCount } } = state;

    const items = [...currentItems];
    const index = items.findIndex(c => c.customer_id === id);

    if (~index) {
      items.splice(index, 1);
    }

    return {
      ...state,
      page: {
        items,
        totalCount: totalCount - 1
      }
    };
  })
);
