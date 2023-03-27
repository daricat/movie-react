import { Input, Button } from 'antd';
import React, { useCallback, useState } from 'react';
import { ISearchMovieProps } from './SearchMovie.interface';

import './SearchMovie.scss';

import {
  PLACEHOLDER_SEARCH_INPUT,
  DEFAULT_SEARCH_QUERY
} from './SearchMovie.const';

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
    <form className='search-movie-form' onSubmit={handleSubmit}>
      <Input
        className='search-movie-form__input'
        placeholder={PLACEHOLDER_SEARCH_INPUT}
        value={searchTerm}
        onChange={handleChange}
      />
      <Button
        className='search-movie-form__submit'
        type='primary'
        htmlType='submit'
      >
        Search
      </Button>
    </form>
  );
}

export default SearchMovie;
