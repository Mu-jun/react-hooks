import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    setValue(inputValue);
  };
  return { value, onChange };
};

const useValidatedInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const inputValue = event.target.value;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(inputValue);
    }
    if (willUpdate) {
      setValue(inputValue);
    }
  };
  return { value, onChange };
};

export { useInput, useValidatedInput };
