import './App.css';
import { increment, decrement, incrementByAmount, decrementByValue } from "./reducers/counterSlice"
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

function App() {
  // const count = useSelector(selectCount);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('');
  const [decrementAmount, setDecrementAmount] = useState('');

  return (
    <div className="App">
      <h1>REDUX Tutorial</h1>
      <span>Count  : {count}</span>
      <div class="container">
      <button title='Increment' onClick={() => dispatch(increment())}>+</button>
      <button title='Decrement' onClick={() => dispatch(decrement())}>-</button>
      <input 
      type="text" 
      placeholder='Put increment amount value'
      value={incrementAmount}
      onChange={e => setIncrementAmount(e.target.value)} />
      <button title='Decrement' onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>INC Amount</button>
      <input 
      type="text" 
      placeholder='Put decrement amount value'
      value={decrementAmount}
      onChange={e => setDecrementAmount(e.target.value)} />
      <button title='Decrement' onClick={() => dispatch(decrementByValue(Number(decrementAmount)))}>DEC Amount</button>
      </div>
    </div>
  );
}

export default App;
