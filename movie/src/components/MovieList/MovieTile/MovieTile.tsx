import React from 'react';
import { MoreOutlined } from '@ant-design/icons';

import { getYear } from '../../../utils/date/dates.util';
import { transformGenresForMovieTile } from '../../../utils/string/string.util';
import Button from '../../Button/Button';

import { TMovie } from '../MovieList.type';

import { CONTEXT_MENU_ITEMS } from './MovieTile.const';

import './MovieTile.scss';
import ContextMenu from '../../ContextMenu/ContextMenu';

function MovieTile({ id, releaseDate, posterPath, title, genres }: TMovie) {
  const movieYear = getYear(releaseDate);
  const genresString = transformGenresForMovieTile(genres);

  const handlerСontextMenu = () => {
    console.log('Dispatch action according select value from context menu');
  };

  const handletMovieClick = () => {
    console.log('Dispatch action for opening movie detail');
  };

  return (
    <article className='MovieTile' onClick={handletMovieClick}>
      {/* TO-DO: provide enums of actions */}
      <ContextMenu
        items={CONTEXT_MENU_ITEMS}
        showSelectedItem={false}
        icon={<MoreOutlined />}
        onSelect={handlerСontextMenu}
      />
      <figure className='MovieTile-image'>
        <img src={posterPath} alt='Elephant at sunset' />
      </figure>

      <p className='MovieTile-details'>
        <span className='MovieTile-details__title'>{title}</span>
        <Button
          label={movieYear}
          className='MovieTile-details__year'
          theme='transparent'
        />
        <span className='MovieTile-details__genres'>{genresString}</span>
      </p>
    </article>
  );
}

export default MovieTile;
