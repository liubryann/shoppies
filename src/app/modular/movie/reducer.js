import produce from 'immer';
import * as types from './types';

const initalState = {
  movieResults: null,
  title: null,
  nominations: []
};

const reducer = produce((state, action) => {
  switch (action.type) {
    case types.SAVE_MOVIES:
      state.movieResults = action.payload.movies
      break;
    case types.SAVE_TITLE: 
      state.title = action.payload.title
      break; 
    case types.NOMINATE_MOVIE:
      state.nominations = [action.payload.movie, ...state.nominations]
      break;
    default:
      break;
  }
},
initalState);

export default reducer;
