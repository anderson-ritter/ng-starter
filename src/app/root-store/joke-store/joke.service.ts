import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joke } from './jokes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class JokeService {

  private jokesUrl = 'api/jokes';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET jokes from the server */
  getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.jokesUrl);
  }

  /** GET joke by id. Return `undefined` when id not found */
  getJokeNo404<Data>(id: number): Observable<Joke> {
    const url = `${this.jokesUrl}/?id=${id}`;
    return this.http.get<Joke[]>(url)
      .pipe(
        map(jokes => jokes[0]), // returns a {0|1} element array;
      );
  }

  /** GET joke by id. Will 404 if id not found */
  getJoke(id: number): Observable<Joke> {
    const url = `${this.jokesUrl}/${id}`;
    return this.http.get<Joke>(url);
  }

  /* GET jokes whose name contains search term */
  searchJokes(term: string): Observable<Joke[]> {
    if (!term.trim()) {
      // if not search term, return empty joke array.
      return of([]);
    }

    return this.http.get<Joke[]>(`api/jokes/?name=${term}`);
  }

  //////// Save methods //////////

  /** POST: add a new joke to the server */
  addJoke(joke: Joke): Observable<Joke> {
    return this.http.post<Joke>(this.jokesUrl, joke, httpOptions);
  }

  /** DELETE: delete the joke from the server */
  deleteJoke(joke: Joke): Observable<number> {
    const id = typeof joke === 'number' ? joke : joke.id;
    const url = `${this.jokesUrl}/${id}`;

    this.http.delete<Joke>(url, httpOptions);

    return of(joke.id);
  }

  /** PUT: update the joke on the server */
  updateJoke(joke: Joke): Observable<any> {
    this.http.put(this.jokesUrl, joke, httpOptions);

    return of(joke);
  }
}
