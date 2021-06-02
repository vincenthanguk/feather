import { useState } from 'react';

function useInputState(initialVal) {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
}

// const [age, handleAgeChange, resetAge] = useInputState('')

export default useInputState;
