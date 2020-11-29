import React from 'react';
import { TextField } from '@material-ui/core';

const SearchInput = ({ onChange }) => {
    return (
        <TextField
            id="standard-basic"
            label="Search repositories"
            onChange={onChange}
        />
    );
};

export default SearchInput;
