import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <br></br>
    </div>
  );
}

export default Counter;
