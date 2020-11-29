import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
    it('renders properly', () => {
        const { getByLabelText } = render(<SearchInput onChange={() => {}} />);
        const input = getByLabelText(/search repositories/i);
        expect(input).toBeInTheDocument();
    });

    it('allow the user to type in query', () => {
        const testQuery = 'test repository';
        const { getByLabelText } = render(<SearchInput onChange={() => {}} />);

        const input = getByLabelText(/search repositories/i);

        fireEvent.change(input, { target: { value: testQuery } });
        expect(input).toHaveValue(testQuery);
    });
});
