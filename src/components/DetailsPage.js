import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import { fetchDetails } from '../redux/actions';

const DetailsPage = ({ repositoryId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetails(repositoryId));
    }, [dispatch, repositoryId]);

    const details = useSelector((state) => state.repos.details);

    if (!details) return null;

    return (
        <div className="app-container">
            <List>
                {details.map((detail) => {
                    return (
                        <ListItem key={detail.label} divider>
                            <ListItemText>{`${detail.label}: ${detail.value}`}</ListItemText>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
};

DetailsPage.propTypes = {
    repositoryId: PropTypes.string.isRequired,
};

export default DetailsPage;
