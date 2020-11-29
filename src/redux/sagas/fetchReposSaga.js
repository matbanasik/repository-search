import { takeEvery } from 'redux-saga/effects';
import { REPOS_FETCH_REQUESTED } from '../actions/types';

function* fetchRepos() {
    yield console.log('Fetch repos');
}

export function* fetchReposSaga() {
    yield takeEvery(REPOS_FETCH_REQUESTED, fetchRepos);
}

export default fetchReposSaga;
