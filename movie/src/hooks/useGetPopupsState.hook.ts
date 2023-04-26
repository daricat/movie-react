import { useMemo } from 'react';
import { GET_PARAMS } from '../const/router.const';
import useGetParameter from './useGetParameter.hook';

function useGetPopupsState() {
  const popupName = useGetParameter(GET_PARAMS.popup);
  console.log(popupName);

  const isOpen = useMemo(() => Boolean(popupName), [popupName]);

  return { popupName, isOpen };
}

export default useGetPopupsState;
