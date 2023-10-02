import { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
  const ref = useRef();
  const controlEvent = () => {
    const element = ref.current;
    if (typeof onClick !== 'function') {
      throw new Error('need function');
    }
    if (element) {
      element.addEventListener('click', onClick);
      return () => element.removeEventListener('click', onClick);
    }
  };
  useEffect(controlEvent, [onClick]);
  return ref;
};
