import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ children }) => {
    return <div className="searchbar">{children}</div>;
};

SearchBar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SearchBar;
