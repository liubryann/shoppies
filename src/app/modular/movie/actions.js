import { action } from 'typesafe-actions'; 
import * as types from './types';

export const saveMovies = (movies) => action(types.SAVE_MOVIES, { movies }); 
export const saveTitle = (title) =>action(types.SAVE_TITLE, { title });

export const getMoviesByTitle = (title) => action(types.GET_MOVIES_BY_TITLE, { title });
