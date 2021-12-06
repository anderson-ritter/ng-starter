import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Token, UserInfo } from '../models/auth';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(username: string, password: string): Observable<Token> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')
      .set('scope', environment.auth.scope);

    const token = btoa(`${environment.auth.clientId}:${environment.auth.clientSecret}`);

    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Basic ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const url = `${environment.auth.authority}/connect/token`;
    return this.http.post<Token>(url, body.toString(), { headers })
      .pipe(
        take(1)
      );
  }

  getUserInfo(): Observable<UserInfo> {
    const url = `${environment.auth.authority}/connect/userinfo`;
    return this.http.get<UserInfo>(url)
      .pipe(
        take(1)
      );
  }
}
