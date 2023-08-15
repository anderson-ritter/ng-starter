import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs';

import { CustomersApiService } from '../../shared/services/customers-api.service';
import { APIResponse } from './../../shared/models/goal';
import {
  addCustomer,
  addCustomerFailure,
  addCustomerSuccess,
  deleteCustomer,
  deleteCustomerFailure,
  deleteCustomerSuccess,
  listCustomers,
  listCustomersFailure,
  listCustomersSuccess,
  readCustomer,
  readCustomerFailure,
  readCustomerSuccess,
  updateCustomer,
  updateCustomerFailure,
  updateCustomerSuccess
} from './customers.actions';

export const readCustomer$ = createEffect(
  (actions$: Actions = inject(Actions), customersApiService: CustomersApiService = inject(CustomersApiService)) => {
    return actions$.pipe(
      ofType(readCustomer),
      mergeMap(({ id }) =>
        customersApiService.readCustomer(id)
          .pipe(
            map((customer) => readCustomerSuccess({ customer })),
            catchError((error: HttpErrorResponse) => {
              const response = new APIResponse(error.error);
              return [readCustomerFailure({ messages: response.messages.map(m => m.format()) })];
            })
          )
      )
    );
  },
  { functional: true }
);

export const listCustomers$ = createEffect(
  (actions$: Actions = inject(Actions), customersApiService: CustomersApiService = inject(CustomersApiService)) => {
    return actions$.pipe(
      ofType(listCustomers),
      mergeMap(({ pageIndex, pageSize, sortBy, sortDirection }) =>
        customersApiService.listCustomers(pageIndex, pageSize, sortBy, sortDirection)
          .pipe(
            map(({ items, total_count }) => listCustomersSuccess({ items: items, totalCount: total_count })),
            catchError((error: HttpErrorResponse) => {
              const response = new APIResponse(error.error);
              return [listCustomersFailure({ messages: response.messages.map(m => m.format()) })];
            })
          )
      )
    );
  },
  { functional: true }
);

export const addCustomer$ = createEffect(
  (actions$: Actions = inject(Actions), customersApiService: CustomersApiService = inject(CustomersApiService)) => {
    return actions$.pipe(
      ofType(addCustomer),
      mergeMap(({ customer }) =>
        customersApiService.addCustomer(customer)
          .pipe(
            map(({ is_succeeded, data, messages }) => {
              if (is_succeeded) {
                return addCustomerSuccess({ customer: data })
              }

              return addCustomerFailure({ messages: messages.map(m => m.format()) });
            }),
            catchError((error: HttpErrorResponse) => {
              const response = new APIResponse(error.error);
              return [addCustomerFailure({ messages: response.messages.map(m => m.format()) })];
            })
          )
      )
    );
  },
  { functional: true }
);

export const updateCustomer$ = createEffect(
  (actions$: Actions = inject(Actions), customersApiService: CustomersApiService = inject(CustomersApiService)) => {
    return actions$.pipe(
      ofType(updateCustomer),
      mergeMap(({ customer }) =>
        customersApiService.updateCustomer(customer)
          .pipe(
            map(({ is_succeeded, data, messages }) => {
              if (is_succeeded) {
                return updateCustomerSuccess({ customer: data })
              }

              return updateCustomerFailure({ messages: messages.map(m => m.format()) });
            }),
            catchError((error: HttpErrorResponse) => {
              const response = new APIResponse(error.error);
              return [updateCustomerFailure({ messages: response.messages.map(m => m.format()) })];
            })
          )
      )
    );
  },
  { functional: true }
);

export const deleteCustomer$ = createEffect(
  (actions$: Actions = inject(Actions), customersApiService: CustomersApiService = inject(CustomersApiService)) => {
    return actions$.pipe(
      ofType(deleteCustomer),
      mergeMap(({ id }) =>
        customersApiService.deleteCustomer(id).pipe(
          map(({ is_succeeded, messages }) => {
            if (is_succeeded) {
              return deleteCustomerSuccess({ id })
            }

            return deleteCustomerFailure({ messages: messages.map(m => m.format()) });
          }),
          catchError((error: HttpErrorResponse) => {
            const response = new APIResponse(error.error);
            return [deleteCustomerFailure({ messages: response.messages.map(m => m.format()) })];
          })
        )
      )
    );
  },
  { functional: true }
);
