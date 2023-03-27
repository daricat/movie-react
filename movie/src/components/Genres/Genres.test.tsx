import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Genres from './Genres';

describe('Genres', () => {
  const mockGenres: string[] = [
    'horror',
    'triller',
    'noir',
    'arthouse',
    'cartoon'
  ];
  const HIGHLIGHT_CLASS = 'ant-menu-item-selected';

  const user = userEvent.setup();

  it('Test that component renders all genres passed in props', () => {
    render(<Genres genres={mockGenres} />);

    mockGenres.forEach(async (genre) => {
      const genreElement = screen.getByText(genre);

      await waitFor(() => {
        expect(genreElement).toBeInTheDocument();
      });
    });
  });

  it('Test that component highlights a selected genre passed in props', () => {
    render(<Genres genres={mockGenres} />);

    mockGenres.forEach(async (genre) => {
      const genreElement = screen.getByText(genre);
      const { parentElement } = genreElement;

      await user.click(genreElement);

      expect(parentElement).toHaveClass(HIGHLIGHT_CLASS);
    });
  });
});

export {};
