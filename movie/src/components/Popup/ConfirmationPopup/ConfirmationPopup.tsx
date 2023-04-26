import React from 'react';

import Button from '../../Button/Button';

import { CONFIRMATION_POPUP } from './ConfirmationPopup.const';

import './ConfirmationPopup.scss';
import { GET_PARAMS } from '../../../const/router.const';
import useGetParameter from '../../../hooks/useGetParameter.hook';
import { EConfirmationPopupTypes } from './ConfirmationPopup.type';

function ConfirmationPopup() {
  const confirmationType =
    (useGetParameter(
      GET_PARAMS.popupConfirmationType
    ) as EConfirmationPopupTypes) || EConfirmationPopupTypes.DEFAULT;

  return (
    <div className='Dialog'>
      <h3 className='Dialog-title'>
        {CONFIRMATION_POPUP[confirmationType].title}
      </h3>
      <p className='Dialog-message'>
        {CONFIRMATION_POPUP[confirmationType].message}
      </p>
      <Button label={CONFIRMATION_POPUP[confirmationType].buttonTitle} />
    </div>
  );
}

export default ConfirmationPopup;
