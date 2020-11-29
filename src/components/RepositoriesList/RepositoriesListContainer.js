import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RepositoriesList from './RepositoriesList';

const RepositoriesListContainer = () => {
    const repos = useSelector((state) => state?.repos?.items);
    const loading = useSelector((state) => state?.repos?.loading);
    const history = useHistory();
    const handleRowClick = (param) => {
        history.push(`/repository/${param?.data?.id}`);
    };
    return (
        <RepositoriesList
            items={repos}
            onRowClick={handleRowClick}
            loading={loading}
        />
    );
};

export default RepositoriesListContainer;
