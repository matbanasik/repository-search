import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import PropTypes from 'prop-types';

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'owner', headerName: 'Owner', width: 200 },
    { field: 'score', headerName: 'Stars', width: 200 },
    { field: 'language', headerName: 'Language', width: 200 },
];

const RepositoriesList = ({ items, onRowClick }) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={items}
                columns={columns}
                pageSize={10}
                onCellClick={onRowClick}
                hideFooterSelectedRowCount
            />
        </div>
    );
};

RepositoriesList.propTypes = {
    onRowClick: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired,
            language: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
        })
    ),
};

RepositoriesList.defaultProps = {
    items: [],
};

export default RepositoriesList;
