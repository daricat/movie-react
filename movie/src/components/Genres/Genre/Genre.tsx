import React, { useState } from 'react';

import TGenreProp from './Genre.type';
import EGenreSelected from './Genre.enum';

import './Genre.scss';

function Genre({ title, onSelect, currentItem }: TGenreProp) {
  const isSelect = title === currentItem;

  const handleSelect = () => {
    onSelect(title);
  };

  const genreClassNames = `Genre ${EGenreSelected[+isSelect]}`;

  return (
    <li className={genreClassNames} onClick={handleSelect}>
      {title}
    </li>
  );
}

export default Genre;
