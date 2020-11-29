import { takeEvery, select, put } from 'redux-saga/effects';
import { REPOS_FETCH_REQUESTED } from '../actions/types';
import { setRepos } from '../actions';

function* fetchRepos() {
    const query = yield select((state) => state.repos.query);
    const response = yield fetch(
        `https://api.github.com/search/repositories?q=${query}`
    );
    const repos = yield response.json();
    const mappedRepos = repos.items.map(
        ({ id, name, owner, score, language }) => {
            return {
                id,
                name,
                score,
                language,
                owner: owner.login,
            };
        }
    );
    yield put(setRepos(mappedRepos));
}

export function* fetchReposSaga() {
    yield takeEvery(REPOS_FETCH_REQUESTED, fetchRepos);
}

export default fetchReposSaga;
