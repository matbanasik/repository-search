import { takeEvery, put } from 'redux-saga/effects';
import { setDetails } from '../actions';
import { FETCH_DETAILS } from '../actions/types';

function* fetchDetails({ payload }) {
    try {
        const response = yield fetch(
            `https://api.github.com/repositories/${payload}`
        );
        const details = yield response?.json();
        const mappedDetails = [
            { label: 'Name', value: details?.name },
            { label: 'Language', value: details?.language },
            { label: 'Forks', value: details?.forks },
            { label: 'License', value: details?.license.name },
            { label: 'Open issues', value: details?.open_issues },
            { label: 'Subscribers', value: details?.subscribers_count },
            { label: 'Watchers', value: details?.watchers },
        ];
        yield put(setDetails(mappedDetails));
    } catch (e) {
        // TODO: handle API error
        throw new Error(e);
    }
}

export function* fetchDetailsSaga() {
    yield takeEvery(FETCH_DETAILS, fetchDetails);
}

export default fetchDetailsSaga;
