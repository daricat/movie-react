import { Button, Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';

import './Genres.scss';

import IGenresProps from './Genres.interface';
import transformGenresForMenu from './Genres.utils';

import defaultGenres from './Genres.const';

function Genres({ genres = defaultGenres }: IGenresProps) {
  const genresForMenu = transformGenresForMenu(genres)!;
  const firstGenre = genresForMenu[0]!.key as string;

  const [currentGenre, setCurrent] = useState(firstGenre);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className='genres'>
      <Menu
        className='genres-menu'
        onClick={onClick}
        selectedKeys={[currentGenre]}
        mode='horizontal'
        items={genresForMenu}
      />

      <div className='genres-sort'>
        <span className='genres-sort__title'>sort by</span>

        <Button
          className='genres-sort__menu'
          type='text'
          icon={<CaretDownOutlined />}
        >
          release date
        </Button>
      </div>
    </div>
  );
}

export default Genres;
