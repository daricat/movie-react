import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SmileFilled } from '@ant-design/icons';

import Button from '../components/Button/Button';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button
};

export default ButtonMeta;

type ButtonStory = StoryObj<typeof Button>;

export const DefaultButton: ButtonStory = {
  render: () => <Button label='Button' />
};

export const SmokeButton: ButtonStory = {
  render: () => <Button label='Button' theme='smoke' />
};

export const TransparentButton: ButtonStory = {
  render: () => <Button label='Button' theme='transparent' />
};

export const IconButton: ButtonStory = {
  render: () => <Button label='Button' icon={<SmileFilled />} />
};
