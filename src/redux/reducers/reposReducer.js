import {
    SET_QUERY,
    REPOS_FETCH_SUCCEEDED,
    REPOS_FETCH_REQUESTED,
    SET_DETAILS,
} from '../actions/types';

const reposReducer = (
    state = {
        loading: false,
        items: [],
        query: '',
        details: null,
    },
    action
) => {
    switch (action.type) {
        case SET_QUERY:
            return { ...state, query: action.payload };
        case REPOS_FETCH_REQUESTED:
            return { ...state, loading: true };
        case REPOS_FETCH_SUCCEEDED:
            return { ...state, items: action.payload, loading: false };
        case SET_DETAILS:
            return { ...state, details: action.payload };
        default:
            return state;
    }
};

export default reposReducer;
