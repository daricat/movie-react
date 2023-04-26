import React, { useRef } from 'react';

import { CloseOutlined } from '@ant-design/icons';

import Button from '../Button/Button';

import { TPopupProps } from './Popup.types';

import './Popup.scss';
import { GET_ENUMS } from '../../const/router.const';

import ConfirmationPopup from './ConfirmationPopup/ConfirmationPopup';
import EditMoviePopup from './EditMoviePopup/EditMoviePopup';
import useGetPopupState from '../../hooks/useGetPopupsState.hook';

const popups = {
  [GET_ENUMS.popup.deleteMovie]: ConfirmationPopup,
  [GET_ENUMS.popup.editMovie]: EditMoviePopup
};

function Popup({ children }: React.PropsWithChildren) {
  const { popupName, isOpen } = useGetPopupState();

  const Component = popups[popupName!];

  console.log(Component);

  if (!Component) {
    return null;
  }

  const styleClassPopup = isOpen ? 'Popup-wrap' : 'Popup-wrap__close';

  return (
    <div className={styleClassPopup}>
      <div className='Popup'>
        <Button icon={<CloseOutlined />} theme='transparent' />
        <Component />
      </div>
    </div>
  );
}

export default Popup;
