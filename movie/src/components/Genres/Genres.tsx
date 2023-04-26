import React, { useState } from 'react';

import './Genres.scss';

import { TGenresProps } from './Genres.type';

import DEFAULT_GENRES from './Genres.const';

import Genre from './Genre/Genre';

function Genres({ genres = DEFAULT_GENRES }: TGenresProps) {
  const initialSelectedItem = genres[0].title;

  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);

  const onSelect = (selectedItem: string) => {
    setSelectedItem(selectedItem);
  };

  return (
    <ul className='Genres'>
      {genres.map(({ title, id }) => (
        <Genre
          title={title}
          onSelect={onSelect}
          key={id}
          currentItem={selectedItem}
        />
      ))}
    </ul>
  );
}

export default Genres;
