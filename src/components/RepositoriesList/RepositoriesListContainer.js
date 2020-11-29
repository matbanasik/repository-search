import React from 'react';
import { useSelector } from 'react-redux';
import RepositoriesList from './RepositoriesList';

const RepositoriesListContainer = () => {
    const repos = useSelector((state) => state.repos.items);
    console.log(repos);
    return <RepositoriesList items={repos} />;
};

export default RepositoriesListContainer;
