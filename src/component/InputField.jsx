import React, { useState } from 'react';

const InputField = () => {
  const [strValue, setStrValue] = useState('Example of the text in the input');
  return (
    <div>
        <input type='text' value={strValue} onChange={event => setStrValue(event.target.value)}></input>
        <p>{strValue}</p>
    </div>
  );
}

export default InputField;
