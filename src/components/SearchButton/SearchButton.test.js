import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchButton from './SearchButton';

describe('SearchButton component', () => {
    it('renders properly', () => {
        const { getByText } = render(<SearchButton onClick={() => {}} />);

        expect(getByText(/search/i)).toBeInTheDocument();
    });

    it('fires onClick finction when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<SearchButton onClick={handleClick} />);

        fireEvent.click(getByText(/search/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
