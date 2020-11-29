import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SearchBarContainer from './SearchBar/SearchBarContainer';

const App = () => {
    return (
        <Provider store={store}>
            <SearchBarContainer />
        </Provider>
    );
};

export default App;
