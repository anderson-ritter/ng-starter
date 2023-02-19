import { Actions, ActionTypes } from './actions';
import { initialState, jokeAdapter, JokeState } from './state';

export function featureReducer(state: JokeState = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_JOKE_SUCCESS:
      return jokeAdapter.addOne(action.payload, state);
    case ActionTypes.GET_JOKES_SUCCESS:
      return jokeAdapter.addMany(action.payload, state);
    case ActionTypes.UPDATE_JOKE_SUCCESS:
      return jokeAdapter.updateOne(action.payload, state);
    case ActionTypes.DELETE_JOKE_SUCCESS:
      return jokeAdapter.removeOne(action.payload, state);
    case ActionTypes.SELECT_JOKE:
      state.selectedJokeId = action.payload;
      return state;
    default:
      return state;
  }
}
