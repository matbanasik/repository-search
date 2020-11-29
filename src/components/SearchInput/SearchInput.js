import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const SearchInput = ({ onChange }) => {
    return (
        <TextField
            id="standard-basic"
            label="Search repositories"
            onChange={onChange}
        />
    );
};

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default SearchInput;
