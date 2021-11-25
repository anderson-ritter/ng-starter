import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { SigninModel } from '../models/auth/signin.model';


@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string): Observable<SigninModel> {
    return of({ givenName: username, accessToken: "874bc873fg347fh873yc34y_0fb8y4f928yd9c28yf9c28yf92c8yf90284yf92eh" });
  }
}
