import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchMovie from './SearchMovie';

import {
  PLACEHOLDER_SEARCH_INPUT,
  DEFAULT_SEARCH_QUERY
} from './SearchMovie.const';

describe('SearchMovie', () => {
  const SEARCH_QUERY = 'BoJack';
  const mockOnSearch = jest.fn((searchQuery: string): void => {
    console.log(searchQuery);
  });

  const user = userEvent.setup();

  it('Renders with initial search query value', () => {
    render(
      <SearchMovie initialSearchQuery={SEARCH_QUERY} onSearch={mockOnSearch} />
    );

    const searchInput = screen.getByPlaceholderText(PLACEHOLDER_SEARCH_INPUT);

    expect(searchInput).toHaveValue(SEARCH_QUERY);
  });

  it('Search input renders with default search querry if props does not provide', () => {
    render(<SearchMovie onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText(PLACEHOLDER_SEARCH_INPUT);

    expect(searchInput).toHaveValue(DEFAULT_SEARCH_QUERY);
  });

  it('Calls the onSearch prop with the proper value after typing to the input and clicking the submit button', async () => {
    render(<SearchMovie onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText(PLACEHOLDER_SEARCH_INPUT);
    const submitButton = screen.getByRole('button', { name: 'Search' });

    await user.clear(searchInput);
    await user.type(searchInput, SEARCH_QUERY);
    await user.click(submitButton);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith(SEARCH_QUERY);
  });

  it('Calls onSearch prop with the correct value after typing into the input and pressing Enter key', async () => {
    render(<SearchMovie onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText(PLACEHOLDER_SEARCH_INPUT);

    await user.clear(searchInput);
    await user.type(searchInput, DEFAULT_SEARCH_QUERY);
    await user.type(searchInput, '{enter}');

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith(DEFAULT_SEARCH_QUERY);
  });
});

export {};
