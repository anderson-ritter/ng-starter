import { createFeatureSelector, createSelector } from '@ngrx/store';

import { jokeAdapter, JokeState } from './state';

export const selectJokeState = createFeatureSelector<JokeState>('jokes');

export const { selectAll: selectAllJokes, selectIds } = jokeAdapter.getSelectors(
  selectJokeState
);

export const getSelectedJoke = createSelector(
  selectJokeState,
  (state) => {
    if (!!state.selectedJokeId)
      return state.entities[state.selectedJokeId];

    return null;
  }
)
