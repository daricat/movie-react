import React, { useRef, useState } from 'react';

import { TContextMenuProps } from './ContextMenu.type';

import EMenuVisibility from './ContextMenu.enum';
import ContextMenuItem from './ContextMenuItem/ContextMenuItem';

import './ContextMenu.scss';
import useClickOutside from '../../hooks/useClickOutside.hook';

function ContextMenu({
  items,
  showSelectedItem = true,
  icon
}: TContextMenuProps) {
  // TO-DO: Create field in main-page store and get value from it
  const initialSortParam = items[0].title;

  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(initialSortParam);

  const menuRef = useRef<HTMLUListElement>(null);
  useClickOutside(menuRef, () => {
    setIsVisible(false);
  });

  const onSelect = (selectedItem: string) => {
    setSelectedItem(() => selectedItem);
  };

  const changeMenuVisibility = () => {
    setIsVisible((prevValue) => !prevValue);
  };

  const menuClassName = `ContextMenu-items ${EMenuVisibility[+isVisible]}`;

  return (
    <div className='ContextMenu'>
      <span
        className='ContextMenu-item__selected'
        onClick={changeMenuVisibility}
        ref={menuRef}
      >
        {showSelectedItem && selectedItem}
        {icon}
      </span>

      <ul className={menuClassName} onClick={changeMenuVisibility}>
        {items.map(({ title, link }) => (
          <ContextMenuItem
            onSelect={onSelect}
            title={title}
            link={link}
            key={title}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
