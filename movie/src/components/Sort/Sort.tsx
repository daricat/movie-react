import React from 'react';

import { CaretDownOutlined } from '@ant-design/icons';

import ContextMenu from '../ContextMenu/ContextMenu';

import TSortProps from './Sort.type';

import './Sort.scss';

function Sort({ sortParams }: TSortProps) {
  const handlerSelect = () => {
    console.log('Dispath action');
  };

  return (
    <div className='Sort'>
      <span className='Sort-title'>sort by</span>
      <ContextMenu
        items={sortParams}
        showSelectedItem
        icon={<CaretDownOutlined />}
        onSelect={handlerSelect}
      />
    </div>
  );
}

export default Sort;
