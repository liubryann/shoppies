import { put, takeEvery, call } from 'redux-saga/effects'; 
import * as actions from './actions';
import * as types from './types';
import moviesService from '../../../services/moviesService';

export function* getMoviesByTitle({ payload }) {
    const movies = yield call(moviesService.getMoviesByTitle, payload.title);
    yield put(actions.saveMovies(movies));
    yield put(actions.saveTitle(payload.title));
}

export function* watchGetMoviesByTitleAsync() {
    yield takeEvery(types.GET_MOVIES_BY_TITLE, getMoviesByTitle)
}

export const sagas = [
    watchGetMoviesByTitleAsync
];