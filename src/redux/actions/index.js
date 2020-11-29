import {
    REPOS_FETCH_REQUESTED,
    SET_QUERY,
    REPOS_FETCH_SUCCEEDED,
} from './types';

export const fetchRepos = () => ({ type: REPOS_FETCH_REQUESTED });
export const setRepos = (repos) => ({
    type: REPOS_FETCH_SUCCEEDED,
    payload: repos,
});
export const setQuery = (query) => ({ type: SET_QUERY, payload: query });
