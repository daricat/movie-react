/* eslint-disable camelcase */
import React, { useState } from 'react';

import MovieTile from './MovieTile/MovieTile';

import { TMovieList } from './MovieList.type';

import MOCK_MOVIE_LIST from './MovieList.const';

import './MovieList.scss';

function MovieList() {
  // TO-DO: Deletete variable
  const COUNT_MOVIES = 38;

  const movieList = MOCK_MOVIE_LIST.map(
    ({ id, title, genres, release_date, poster_path }) => ({
      id,
      title,
      genres,
      releaseDate: release_date,
      posterPath: poster_path
    })
  );

  const [movies, setMovies] = useState<TMovieList>(movieList);
  const [countMovies, setCountMovies] = useState(COUNT_MOVIES);

  return (
    <div className='MovieList'>
      <h3 className='MovieList-title'>
        <span>{countMovies}</span> movies found
      </h3>

      <ul className='MovieList-list'>
        {movies.map((movieInfo) => (
          <MovieTile {...movieInfo} key={movieInfo.id} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
