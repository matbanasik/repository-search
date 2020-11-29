import React from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/actions';
import SearchInput from './SearchInput';

const SearchInputContainer = () => {
    const dispatch = useDispatch();
    const handleChange = ({ target: { value } }) => {
        dispatch(setQuery(value));
    };
    return <SearchInput onChange={handleChange} />;
};

export default SearchInputContainer;
