import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { getYear } from '../../utils/date/dates.util';
import { transformGenresForMovieTile } from '../../utils/string/string.util';
import { getMovieDuration } from '../../utils/time/time.util';
import Button from '../Button/Button';

import './MovieDetail.scss';
import { TMovieDetailProps } from './MovieDetail.types';

function MovieDetail({
  title,
  voteAverage,
  genres,
  posterPath,
  runtime,
  overview,
  releaseDate
}: TMovieDetailProps) {
  const movieYear = getYear(releaseDate);
  const genresString = transformGenresForMovieTile(genres);
  const duration = getMovieDuration(runtime);

  return (
    <div className='MovieDetail'>
      <header className='MovieDetail-header'>
        <a className='MovieDetail-header__logo' href='/'>
          netflixroulette
        </a>

        <Button icon={<SearchOutlined />} theme='transparent' />
      </header>

      <article className='MovieDetail-detail'>
        <figure className='MovieDetail-detail__poster'>
          <img src={posterPath} alt='' />
        </figure>

        <p className='MovieDetail-detail__info'>
          <span className='MovieDetail-detail__info-title'>
            {title}
            <span className='MovieDetail-detail__info-vote'>{voteAverage}</span>
          </span>
          <span className='MovieDetail-detail__info-genres'>
            {genresString}
          </span>
          <span className='MovieDetail-detail__info-year-duration'>
            {movieYear} <span>{duration}</span>
          </span>
          <span className='MovieDetail-detail__info-description'>
            {overview}
          </span>
        </p>
      </article>
    </div>
  );
}

export default MovieDetail;
