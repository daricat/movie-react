import { ReactElement } from 'react';

export type TContextMenuItem = {
  title: string;
  action: string;
};

export type TContextMenuProps = {
  items: TContextMenuItem[];
  showSelectedItem: boolean;
  icon: ReactElement;
  onSelect: () => void;
};
