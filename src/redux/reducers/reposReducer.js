const reposReducer = (state, action) => {
    switch (action.type) {
        case 'REPOS_FETCH_REQUESTED':
            return { ...state, response: null, loading: true };
        case 'REPOS_FETCH_SUCCEEDED':
            return { ...state, response: action.response, loading: false };
        default:
            return {
                response: 'No Response',
            };
    }
};

export default reposReducer;
