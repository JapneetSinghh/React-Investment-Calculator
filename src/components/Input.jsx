import { useState } from "react";
export default function Input({ labelName, getInputValue, keyVal }) {
  const [inputValue, setInputValue] = useState('');

  function handleKeyStrokes(event) {
      const currentValue = event.target.value;
      if (isNaN(currentValue)) {
        return;
      }
      setInputValue(currentValue)
      getInputValue({ labelName }, currentValue, keyVal);
  }

  return (
    <div>
      <label htmlFor="">{labelName}</label>
      <input  type="number" value={inputValue} onChange={handleKeyStrokes} />
    </div>
  );
}
