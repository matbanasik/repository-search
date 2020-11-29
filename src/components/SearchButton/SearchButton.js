import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const SearchButton = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            label="Search"
        >
            Search
        </Button>
    );
};

SearchButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default SearchButton;
