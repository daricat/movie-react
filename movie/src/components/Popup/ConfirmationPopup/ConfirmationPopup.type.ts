export enum EConfirmationPopupTypes {
  DELETE = 'deleteMovie',
  DEFAULT = 'default'
}

export type TConfirmationPopupProps = {
  type: EConfirmationPopupTypes;
};

interface IConfrimationPopupConst {
  title: string;
  message: string;
  buttonTitle: string;
}

export type TConfirmationPopup = {
  [key in EConfirmationPopupTypes]: IConfrimationPopupConst;
};
