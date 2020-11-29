import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SearchBarContainer from './SearchBar/SearchBarContainer';
import RepositoriesListContainer from './RepositoriesList/RepositoriesListContainer';

const App = () => {
    // const isLoading = useSelector((state) => state.repos.items);
    return (
        <Provider store={store}>
            <div className="app-container">
                <SearchBarContainer />
                <RepositoriesListContainer />
            </div>
        </Provider>
    );
};

export default App;
