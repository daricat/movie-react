import React from 'react';
import { Layout, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './Button.scss';
import EButton from '../../enums/Button';
import IButtonConfig from '../../interfaces/Button';
import IButtonProps from './Button.interface';

// function DefaultButton({ buttonConfig: IButtonConfig }: IButtonProps) {
//   return <Button />;
// }

// const ButtonList = {
//   [EButton.default]: (buttonConfig: IButtonProps) => (
//     <DefaultButton buttonConfig={buttonConfig} />
//   )
// };

// function CustomButton(buttonType: EButton) {
//   return ButtonList[buttonType];
// }
