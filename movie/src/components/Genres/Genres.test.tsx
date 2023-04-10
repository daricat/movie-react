import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Genres from './Genres';
import { TGenre } from './Genres.type';

describe('Genres', () => {
  const mockGenres: TGenre[] = [
    {
      title: 'horror',
      id: 'horror'
    },
    {
      title: 'triller',
      id: 'triller'
    },
    {
      title: 'noir',
      id: 'noir'
    },
    {
      title: 'arthouse',
      id: 'arthouse'
    },
    {
      title: 'cartoon',
      id: 'cartoon'
    }
  ];
  const HIGHLIGHT_CLASS = 'ant-menu-item-selected';

  const user = userEvent.setup();

  it('Test that component renders all genres passed in props', () => {
    render(<Genres genres={mockGenres} />);

    mockGenres.forEach(async ({ title }) => {
      const genreElement = screen.getByText(title);

      await waitFor(() => {
        expect(genreElement).toBeInTheDocument();
      });
    });
  });

  it('Test that component highlights a selected genre passed in props', () => {
    render(<Genres genres={mockGenres} />);

    mockGenres.forEach(async ({ title }) => {
      const genreElement = screen.getByText(title);
      const { parentElement } = genreElement;

      await user.click(genreElement);

      expect(parentElement).toHaveClass(HIGHLIGHT_CLASS);
    });
  });
});

export {};
