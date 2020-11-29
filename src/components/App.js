import React from 'react';
import SearchBarContainer from './SearchBar/SearchBarContainer';
import RepositoriesListContainer from './RepositoriesList/RepositoriesListContainer';

const App = () => {
    return (
        <div className="app-container">
            <SearchBarContainer />
            <RepositoriesListContainer />
        </div>
    );
};

export default App;
