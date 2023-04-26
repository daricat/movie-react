import React, { useCallback, useState } from 'react';

import { ISearchMovieProps } from './SearchMovie.interface';

import './SearchMovie.scss';

import {
  PLACEHOLDER_SEARCH_INPUT,
  DEFAULT_SEARCH_QUERY
} from './SearchMovie.const';
import Button from '../Button/Button';

function SearchMovie({
  initialSearchQuery = DEFAULT_SEARCH_QUERY,
  onSearch
}: ISearchMovieProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchQuery);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(searchTerm);
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    [setSearchTerm]
  );

  return (
    <form className='SearchMovie' onSubmit={handleSubmit}>
      <input type='text' className='Input default' />
      <Button type='submit' label='search' />
    </form>
  );
}

export default SearchMovie;
