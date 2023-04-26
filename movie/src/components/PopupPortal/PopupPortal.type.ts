import { ReactNode } from 'react';

export type TPopupPortalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};
