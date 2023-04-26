import {
  EConfirmationPopupTypes,
  TConfirmationPopup
} from './ConfirmationPopup.type';

export const CONFIRMATION_POPUP: TConfirmationPopup = {
  [EConfirmationPopupTypes.DELETE]: {
    title: 'delete movie',
    message: 'Are you sure you want to delete this movie?',
    buttonTitle: 'confirm'
  },
  [EConfirmationPopupTypes.DEFAULT]: {
    title: 'delete movie',
    message: 'Are you sure you want to delete this movie?',
    buttonTitle: 'confirm'
  }
};
