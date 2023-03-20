import { Input, Button } from 'antd';
import React, { useCallback, useState } from 'react';

import './SearchMovie.scss';

function SearchMovie() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(searchTerm);
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    [setSearchTerm]
  );

  return (
    <form className="search-movie-form" onSubmit={handleSubmit}>
      <Input
        className="search-movie-form__input"
        placeholder="What do you want to watch?"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button
        className="search-movie-form__submit"
        type="primary"
        htmlType="submit"
      >
        Search
      </Button>
    </form>
  );
}

export default SearchMovie;
