import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Customer } from '../../shared/models/customers';
import { PaginationPage } from './../../shared/models/core';
import { SortDirection } from './../../shared/models/goal';
import { addCustomer, deleteCustomer, listCustomers, readCustomer, updateCustomer } from './customers.actions';
import { selectCustomersPage, selectSelectedCustomer } from './customers.selectors';

@Injectable({ providedIn: 'root' })
export class CustomersStore {

  private readonly store: Store = inject(Store);

  readonly customers$: Observable<PaginationPage<Customer>> = this.store.select(selectCustomersPage);
  readonly selectedCustomers$: Observable<Customer | undefined> = this.store.select(selectSelectedCustomer);

  addCustomer(customer: Customer): void {
    this.store.dispatch(addCustomer({ customer }));
  }

  updateOne(customer: Customer): void {
    this.store.dispatch(updateCustomer({ customer }));
  }

  deleteOne(id: string): void {
    this.store.dispatch(deleteCustomer({ id }));
  }

  readCustomer(id: string) {
    this.store.dispatch(readCustomer({ id }));
  }

  listCustomers(pageIndex?: number, pageSize?: number, sortBy?: string, sortDirection?: SortDirection) {
    this.store.dispatch(listCustomers({ pageIndex, pageSize, sortBy, sortDirection }));
  }
}
