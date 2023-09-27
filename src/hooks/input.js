import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    setValue(inputValue);
  };
  return { value, onChange };
};

export default useInput;
