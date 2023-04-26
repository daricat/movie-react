import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CaretDownFilled } from '@ant-design/icons';

import ContextMenu from '../components/ContextMenu/ContextMenu';
import { SORT_MENU_DATA } from '../pages/Main/Main.const';

const ContextMenuMeta: Meta<typeof ContextMenu> = {
  title: 'Context menu',
  component: ContextMenu
};

export default ContextMenuMeta;

type ContextMenuStory = StoryObj<typeof ContextMenuMeta>;

export const DefaultShowSelectedContextMenu: ContextMenuStory = {
  render: () => (
    <ContextMenu
      items={SORT_MENU_DATA}
      showSelectedItem
      icon={<CaretDownFilled />}
      onSelect={() => console.log}
    />
  )
};

export const DefaultDontShowSelectedContextMenu: ContextMenuStory = {
  render: () => (
    <ContextMenu
      items={SORT_MENU_DATA}
      showSelectedItem={false}
      icon={<CaretDownFilled />}
      onSelect={() => console.log}
    />
  )
};
