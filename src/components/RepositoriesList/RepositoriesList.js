import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

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

export default RepositoriesList;
