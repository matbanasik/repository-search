import { takeEvery, put } from 'redux-saga/effects';
import { setDetails } from '../actions';
import { FETCH_DETAILS } from '../actions/types';

function* fetchDetails({ payload }) {
    const response = yield fetch(
        `https://api.github.com/repositories/${payload}`
    );
    const details = yield response.json();
    console.log(details);
    const mappedDetails = [
        { label: 'Name', value: details.name },
        { label: 'Language', value: details.language },
        { label: 'Forks', value: details.forks },
        { label: 'License', value: details.license.name },
        { label: 'Open issues', value: details.open_issues },
        { label: 'Subscribers', value: details.subscribers_count },
        { label: 'Watchers', value: details.watchers },
    ];
    yield put(setDetails(mappedDetails));
}

export function* fetchDetailsSaga() {
    yield takeEvery(FETCH_DETAILS, fetchDetails);
}

export default fetchDetailsSaga;
