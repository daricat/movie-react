import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Genres from '../components/Genres/Genres';

import DEFAULT_GENRES from '../components/Genres/Genres.const';

const GenresMeta: Meta<typeof Genres> = {
  title: 'Genres',
  component: Genres
};

export default GenresMeta;

type GenresStory = StoryObj<typeof Genres>;

export const DefaultGenres: GenresStory = {
  render: () => <Genres genres={DEFAULT_GENRES} />
};
