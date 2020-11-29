import React from 'react';

const SearchButton = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick}>
            Search
        </button>
    );
};

export default SearchButton;
