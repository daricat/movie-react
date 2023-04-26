import { RefObject, useEffect } from 'react';

type TEventHandler = MouseEvent | TouchEvent;
type THandler = (event: TEventHandler) => void;

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: THandler
) {
  useEffect(() => {
    const handleClickOutside = (event: TEventHandler) => {
      const element = ref.current!;

      const isElementContainTarget =
        element.contains(event.target as Node) || null;

      if (!element || isElementContainTarget) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, handler]);
}

export default useClickOutside;
