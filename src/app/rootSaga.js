import { sagas as movieSagas } from './modular/movie/sagas';
import { all, fork } from 'redux-saga/effects';

const allSagas = [
    ...movieSagas
]

export default function* rootSaga() {
    yield all(allSagas.map((saga) => fork(saga)));
}