import React from 'react';
import SearchBar from './SearchBar';
import SearchInputContainer from '../SearchInput/SearchInputContainer';
import SearchButtonContainer from '../SearchButton/SearchButtonContainer';

const SearchBarContainer = () => {
    return (
        <SearchBar>
            <SearchInputContainer />
            <SearchButtonContainer />
        </SearchBar>
    );
};

export default SearchBarContainer;
