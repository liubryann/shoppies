import produce from 'immer';
import * as types from './types';

const initalState = {
  movieResults: null,
  title: null
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case types.SAVE_MOVIES:
      state.movieResults = action.payload.movies
      break;
    case types.SAVE_TITLE: 
      state.title = action.payload.title
    default:
      break;
  }
},
initalState);

export default reducer;
