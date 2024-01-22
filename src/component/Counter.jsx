import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3 className='counter_value'>Counter: {counter}</h3>
      <div className="counter_btn_list">
        <button className='counter_btn' onClick={() => setCounter(counter + 1)}>Increment</button>
        <button className='counter_btn' onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
      <br></br>
    </div>
  );
}

export default Counter;
