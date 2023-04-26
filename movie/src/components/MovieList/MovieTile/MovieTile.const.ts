import { GET_PARAMS } from '../../../const/router.const';

export const CONTEXT_MENU_ITEMS = [
  // TO-DO: change action according to actions for reducer
  {
    title: 'edit',
    link: `/main&${GET_PARAMS.popupConfirmationType}=delete`
  },
  {
    title: 'delete',
    link: `${GET_PARAMS.popupConfirmationType}=delete`
  }
];
