import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MovieTile from '../components/MovieList/MovieTile/MovieTile';

import MOCK_MOVIE_LIST from '../components/MovieList/MovieList.const';

const MovieTileMeta: Meta<typeof MovieTile> = {
  title: 'Movie Tile',
  component: MovieTile
};

export default MovieTileMeta;

type GenresStory = StoryObj<typeof MovieTile>;

const MOCK_MOVIE = MOCK_MOVIE_LIST[2];

export const DefaultMovieTile: GenresStory = {
  render: () => (
    <MovieTile
      id={MOCK_MOVIE.id}
      title={MOCK_MOVIE.title}
      genres={MOCK_MOVIE.genres}
      posterPath={MOCK_MOVIE.poster_path}
      releaseDate={MOCK_MOVIE.release_date}
    />
  )
};
