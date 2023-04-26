import React from 'react';
import { Link } from 'react-router-dom';

import TContextMenuItemProps from './ContextMenuItem.type';

import './ContextMenuItem.scss';

function ContextMenuItem({ title, link, onSelect }: TContextMenuItemProps) {
  const handleSelect = () => onSelect(title);

  return (
    <Link
      to={{
        pathname: '/main',
        search: link
      }}
      className='ContextMenuItem'
    >
      {title}
    </Link>
  );
}

export default ContextMenuItem;
