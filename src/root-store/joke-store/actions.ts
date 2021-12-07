import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Joke } from '././../../shared/models/jokes';


export enum ActionTypes {
  ADD_JOKE = '@app/jokes/ADD_JOKE',
  ADD_JOKE_SUCCESS = '@app/jokes/ADD_JOKE_SUCCESS',
  GET_JOKES = '@app/jokes/GET_JOKES',
  GET_JOKES_SUCCESS = '@app/jokes/GET_JOKES_SUCCESS',
  UPDATE_JOKE = '@app/jokes/UPDATE_JOKE',
  UPDATE_JOKE_SUCCESS = '@app/jokes/UPDATE_JOKE_SUCCESS',
  GET_JOKE = '@app/jokes/GET_JOKE',
  GET_JOKE_SUCCESS = '@app/jokes/GET_JOKE_SUCCESS',
  DELETE_JOKE = '@app/jokes/DELETE_JOKE',
  DELETE_JOKE_SUCCESS = '@app/jokes/DELETE_JOKE_SUCCESS',
  SELECT_JOKE = '@app/jokes/SELECT_JOKE',
}

export class AddJoke implements Action {
  readonly type = ActionTypes.ADD_JOKE;
  constructor(public payload: Joke) { }
}

export class AddJokeSuccess implements Action {
  readonly type = ActionTypes.ADD_JOKE_SUCCESS;
  constructor(public payload: Joke) { }
}

export class GetJokes implements Action {
  readonly type = ActionTypes.GET_JOKES;
}

export class GetJokesSuccess implements Action {
  readonly type = ActionTypes.GET_JOKES_SUCCESS;
  constructor(public payload: Joke[]) { }
}

export class UpdateJoke implements Action {
  readonly type = ActionTypes.UPDATE_JOKE;
  constructor(public payload: Joke) { }
}

export class UpdateJokeSuccess implements Action {
  readonly type = ActionTypes.UPDATE_JOKE_SUCCESS;
  constructor(public payload: Update<Joke>) { }
}

export class DeleteJoke implements Action {
  readonly type = ActionTypes.DELETE_JOKE;
  constructor(public payload: Joke) { }
}

export class DeleteJokeSuccess implements Action {
  readonly type = ActionTypes.DELETE_JOKE_SUCCESS;
  constructor(public payload: number) { }
}

export class SelectJoke implements Action {
  readonly type = ActionTypes.SELECT_JOKE;
  constructor(public payload: number) { }
}

export type Actions =
  AddJoke
  | AddJokeSuccess
  | GetJokes
  | GetJokesSuccess
  | UpdateJoke
  | UpdateJokeSuccess
  | DeleteJoke
  | DeleteJokeSuccess
  | SelectJoke;
