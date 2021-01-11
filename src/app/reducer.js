import { combineReducers } from 'redux';

import movieDuck from './modular/movies';

const reducer = combineReducers({
  [movieDuck.name]: movieDuck.reducer,
});

export default reducer;
