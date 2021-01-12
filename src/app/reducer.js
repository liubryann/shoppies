import { combineReducers } from 'redux';

import movieDuck from './modular/movie';

const reducer = combineReducers({
  [movieDuck.name]: movieDuck.reducer,
});

export default reducer;
