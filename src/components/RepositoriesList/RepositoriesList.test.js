import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepositoriesList from './RepositoriesList';

describe('RepositoriesList component', () => {
    it('renders properly', () => {
        const repositories = [
            {
                id: 1,
                language: 'Javascript',
                name: 'test name',
                owner: 'Test owner',
                score: 22,
            },
        ];

        const { getByRole } = render(
            <RepositoriesList items={repositories} onRowClick={() => {}} />
        );

        expect(getByRole(/row/)).toBeInTheDocument();
    });
});
