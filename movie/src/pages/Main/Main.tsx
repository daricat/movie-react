import React from 'react';

import SearchMovie from '../../components/SearchMovie/SearchMovie';
import Genres from '../../components/Genres/Genres';

import defaultGenres from '../../components/Genres/Genres.const';

import './Main.scss';

export function Main() {
  const onSearch = (searchQuery: string): void => {
    console.log(searchQuery);
  };

  return (
    <section className='Main'>
      <h1 className='main__title'>find your movie</h1>

      <SearchMovie onSearch={onSearch} />
      <Genres genres={defaultGenres} />
    </section>
  );
}

export default Main;
