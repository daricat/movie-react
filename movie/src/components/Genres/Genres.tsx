import { Button, Menu, MenuProps } from 'antd';
import React, { useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';

import './Genres.scss';

const menuGenres: MenuProps['items'] = [
  {
    label: 'All',
    key: 'all'
  },
  {
    label: 'Documentary',
    key: 'documentary'
  },
  {
    label: 'Comedy',
    key: 'comedy'
  },
  {
    label: 'Horror',
    key: 'horror'
  }
];

function Genres() {
  const [current, setCurrent] = useState('all');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="genres">
      <Menu
        className="genres-menu"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={menuGenres}
      />

      <div className="genres-sort">
        <span className="genres-sort__title">sort by</span>

        <Button
          className="genres-sort__menu"
          type="text"
          icon={<CaretDownOutlined />}
        >
          release date
        </Button>
      </div>
    </div>
  );
}

export default Genres;
