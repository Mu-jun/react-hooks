import { useEffect } from 'react';
import { useState } from 'react';

export const useScroll = () => {
  const [location, setLocation] = useState({ scrollX: 0, scrollY: 0 });
  const onScroll = () => {
    console.log(`x: ${window.scrollX}, y: ${window.scrollY}`);
    setLocation({ scrollX: window.scrollX, scrollY: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return location;
};
