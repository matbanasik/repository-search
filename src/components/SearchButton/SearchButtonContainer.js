import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRepos } from '../../redux/actions';
import SearchButton from './SearchButton';

const SearchButtonContainer = () => {
    const dispatch = useDispatch();
    const handleOnClick = () => dispatch(fetchRepos());

    return <SearchButton onClick={handleOnClick} />;
};

export default SearchButtonContainer;
