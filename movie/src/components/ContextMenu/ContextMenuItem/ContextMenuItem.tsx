import React from 'react';

import TContextMenuItemProps from './ContextMenuItem.type';

import './ContextMenuItem.scss';

function ContextMenuItem({ title, onSelect }: TContextMenuItemProps) {
  const handleSelect = () => onSelect(title);

  return (
    <li className='ContextMenuItem' onClick={handleSelect}>
      {title}
    </li>
  );
}

export default ContextMenuItem;
