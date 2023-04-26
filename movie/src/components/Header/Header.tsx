import { PlusOutlined } from '@ant-design/icons';
import React from 'react';

import Button from '../Button/Button';

import './Header.scss';

function Header() {
  return (
    <header className='Header'>
      <a className='header-logo' href='/'>
        <span>netflix</span>roulette
      </a>

      <Button
        className='header-button'
        theme='default'
        icon={<PlusOutlined />}
        label='add movie'
      />
    </header>
  );
}

export default Header;
