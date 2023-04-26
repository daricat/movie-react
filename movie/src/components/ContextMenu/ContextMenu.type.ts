import { ReactElement } from 'react';

export type TContextMenuItem = {
  title: string;
  link: string;
};

export type TContextMenuProps = {
  items: TContextMenuItem[];
  showSelectedItem: boolean;
  icon: ReactElement;
  onSelect: () => void;
};
