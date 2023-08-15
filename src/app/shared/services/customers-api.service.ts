import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';

import { Customer } from '../models/customers';
import { APIDataResponse, APIPagedResponse, APIResponse, SortDirection } from '../models/goal';
import { environment as env } from './../../../environments/environment';

const API_URL = env.goalAPI.url;
const API_VERSION = '1';
const RESOURCE_URL = `${API_URL}/v${API_VERSION}/customers`;

@Injectable()
export class CustomersApiService {

  private readonly http: HttpClient = inject(HttpClient);

  listCustomers(
    pageIndex: number = 0,
    pageSize: number = 10,
    sortBy: string | null = null,
    sortDirection: SortDirection | null = null)
    : Observable<APIPagedResponse<Customer>> {

    let queryParams = new HttpParams()
      .append('page_index', pageIndex)
      .append('page_size', pageSize);

    if (sortBy) {
      queryParams = queryParams.append('sort_by', sortBy);
    }

    if (sortDirection) {
      queryParams = queryParams.append('sort_direction', sortDirection);
    }

    return this.http
      .get<APIPagedResponse<Customer>>(RESOURCE_URL, { params: queryParams })
      .pipe(
        take(1),
        map(response => {
          const items = Array.getValueOrEmpty<Customer>(response.items).map(item => new Customer(item));
          return new APIPagedResponse<Customer>({
            ...response,
            items
          });
        })
      );
  }

  readCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${RESOURCE_URL}/${id}`)
      .pipe(
        take(1),
        map(customer => new Customer(customer))
      );
  }

  addCustomer(customer: Customer): Observable<APIDataResponse<Customer>> {
    const body = {
      name: customer.name,
      email: customer.email,
      birth_date: customer.birth_date
    }

    return this.http.post<APIDataResponse<Customer>>(RESOURCE_URL, body)
      .pipe(
        take(1),
        map(response => {
          const data = new Customer(response.data);
          return new APIDataResponse<Customer>({
            ...response,
            data
          });
        })
      );
  }

  updateCustomer(customer: Customer): Observable<APIDataResponse<Customer>> {
    const body = {
      name: customer.name,
      email: customer.email,
      birth_date: customer.birth_date
    }

    return this.http.patch<APIDataResponse<Customer>>(`${RESOURCE_URL}/${customer.customer_id}`, body)
      .pipe(
        take(1),

        map(response => {
          const data = new Customer(response.data);
          return new APIDataResponse<Customer>({
            ...response,
            data
          });
        })
      );
  }

  deleteCustomer(id: string): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${RESOURCE_URL}/${id}`)
      .pipe(
        take(1),
        map(response => new APIResponse(response))
      );
  }
}
