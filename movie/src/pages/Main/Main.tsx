import React from 'react';

import SearchMovie from '../../components/SearchMovie/SearchMovie';
import Genres from '../../components/Genres/Genres';

import DEFAULT_GENRES from '../../components/Genres/Genres.const';
import {
  DEFAULT_MOVIE_FOR_DETAIL,
  MAIN_TITLE,
  SORT_MENU_DATA
} from './Main.const';

import './Main.scss';
import Sort from '../../components/Sort/Sort';
import MovieList from '../../components/MovieList/MovieList';
import MovieDetail from '../../components/MovieDetails/MovieDetail';
import Header from '../../components/Header/Header';

export function Main() {
  const movie = DEFAULT_MOVIE_FOR_DETAIL;

  const onSearch = (searchQuery: string): void => {
    console.log(searchQuery);
  };

  return (
    <div className='Main wrap'>
      <Header />
      <section className='Main-search'>
        <h1 className='Main-search-title'>{MAIN_TITLE}</h1>

        <SearchMovie onSearch={onSearch} />
      </section>

      <section className='Main-movie-details'>
        <MovieDetail
          title={movie.title}
          voteAverage={movie.voteAverage}
          genres={movie.genres}
          posterPath={movie.posterPath}
          runtime={movie.runtime}
          overview={movie.overview}
          releaseDate={movie.releaseDate}
        />
      </section>

      <section className='Main-movies'>
        <header className='Main-movies-header'>
          <Genres genres={DEFAULT_GENRES} />
          <Sort sortParams={SORT_MENU_DATA} />
        </header>

        <MovieList />
      </section>
    </div>
  );
}

export default Main;
