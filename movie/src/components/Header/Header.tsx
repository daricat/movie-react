import React from 'react';
import { Layout, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './Header.scss';

function Header() {
  return (
    <Layout.Header className='Header'>
      <a className='header-logo' href='/'>
        <span>netflix</span>roulette
      </a>

      <Button className='header-button' icon={<PlusOutlined />}>
        add movie
      </Button>
    </Layout.Header>
  );
}

export default Header;
