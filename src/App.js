import React, { useState } from 'react';

function App() {
  const [statusPressed, setStatusPressed] = useState(false);
  const [counter, setCounter] = useState(0);
  const [strValue, setStrValue] = useState('Example of the text in the input');

  return (
    <div>
      <h1>Example of the test</h1>
      <button onClick={() => setStatusPressed(!statusPressed)}>
        {statusPressed ? "Button" : "Pressed button"}
      </button>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Dicrement</button>
      <br></br>
      <input 
        type='text' 
        value={strValue}
        onChange={event => setStrValue(event.target.value)}
      ></input>
      
      
      <p>{strValue}</p>
    </div>
  );
}

export default App;
