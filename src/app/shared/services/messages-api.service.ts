import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MessagesApiService {
  private readonly http: HttpClient = inject(HttpClient);

  deleteMessage(id: string): Observable<void> {
    return this.http.delete<void>(`/${id}`);
  }
}
