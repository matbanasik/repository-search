import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import fetchRepos from './sagas/fetchReposSaga';
import fetchDetails from './sagas/fetchDetailsSaga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(fetchDetails);
sagaMiddleware.run(fetchRepos);

export default store;
