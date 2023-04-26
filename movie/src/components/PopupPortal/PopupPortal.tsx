import React from 'react';
import { createPortal } from 'react-dom';

import { TPopupPortalProps } from './PopupPortal.type';
import Popup from '../Popup/Popup';

function PopupPortal({
  children,
  isOpen,
  onClose,
  onSubmit
}: React.PropsWithChildren<TPopupPortalProps>) {
  const popupContainer = document.getElementById('pop-up')!;

  return <>{createPortal(<Popup>{children}</Popup>, popupContainer)}</>;
}
export default PopupPortal;
