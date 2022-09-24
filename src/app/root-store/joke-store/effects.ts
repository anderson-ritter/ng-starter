import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { JokeService } from './joke.service';
import * as featureActions from './actions';

@Injectable()
export class JokeStoreEffects {
  constructor(
    private jokeService: JokeService,
    private actions$: Actions
  ) { }

  addJokeEffect$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType<featureActions.AddJoke>(featureActions.ActionTypes.ADD_JOKE),
      switchMap((action) => {
        return this.jokeService.addJoke(action.payload)
          .pipe(
            map(joke => new featureActions.AddJokeSuccess(joke))
          )
      })
    )
  );

  getJokesEffect$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType<featureActions.GetJokes>(featureActions.ActionTypes.GET_JOKES),
      switchMap(action => this.jokeService.getJokes()),
      map(jokes => new featureActions.GetJokesSuccess(jokes))
    )
  );

  updateJokeEffect$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType<featureActions.UpdateJoke>(featureActions.ActionTypes.UPDATE_JOKE),
      switchMap(joke => this.jokeService.updateJoke(joke.payload)),
      map(response => new featureActions.UpdateJokeSuccess(response))
    )
  );

  deleteJokeEffect$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType<featureActions.DeleteJoke>(featureActions.ActionTypes.DELETE_JOKE),
      switchMap(joke => this.jokeService.deleteJoke(joke.payload)),
      map(id => new featureActions.DeleteJokeSuccess(id))
    )
  );
}
