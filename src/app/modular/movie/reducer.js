import produce from 'immer';
import * as types from './types';

const initalState = {
  movieResults: null
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case types.SAVE_MOVIES:
      state.movieResults = action.payload.movies
      break;
    default:
      break;
  }
},
initalState);

export default reducer;
