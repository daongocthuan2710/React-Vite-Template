// Libraries
import React, { useState } from 'react';

// Hooks
import { useAppSelector, useAppDispatch } from '../../hooks';

// Slices
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './slice';

// Constants
import { ACTIONS } from './constants';

export interface CounterProps {
  title?: string;
}

const Counter: React.FC<CounterProps> = ({ title }) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      {title}
      <div>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span>{count}</span>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>Add Async</button>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT_SAGA, payload: incrementValue })}>
          Add Async Saga
        </button>
        <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</button>
      </div>
    </div>
  );
};

export default Counter;
