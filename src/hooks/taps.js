import { useState } from 'react';

const useTaps = (initialIndex, allTaps) => {
  const [index, setIndex] = useState(initialIndex);
  return {
    currentItem: allTaps[index],
    setItem: setIndex,
  };
};

export default useTaps;
