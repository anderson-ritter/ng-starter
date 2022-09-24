import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Joke } from './../../shared/models/jokes';

export interface JokeState extends EntityState<Joke> {
  selectedJokeId: number | null;
}

export const jokeAdapter = createEntityAdapter<Joke>({
  selectId: (joke: Joke) => joke.id,
  sortComparer: (joke: Joke) => joke.name.localeCompare(joke.name),
});

export const initialState: JokeState = jokeAdapter.getInitialState({
  selectedJokeId: null
});
