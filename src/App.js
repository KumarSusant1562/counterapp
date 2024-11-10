import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [allowNegative, setAllowNegative] = useState(true);
  const [upperLimit, setUpperLimit] = useState(100);
  const [lowerLimit, setLowerLimit] = useState(0);

  const increment = () => {
    if (count + step <= upperLimit) {
      setCount(count + step);
    }
  };

  const decrement = () => {
    if (count - step >= (allowNegative ? -Infinity : lowerLimit)) {
      setCount(count - step);
    }
  };

  const reset = () => setCount(0);

  const handleStepChange = (e) => setStep(Number(e.target.value));
  const handleUpperLimitChange = (e) => setUpperLimit(Number(e.target.value));
  const handleLowerLimitChange = (e) => setLowerLimit(Number(e.target.value));
  const toggleAllowNegative = () => setAllowNegative(!allowNegative);

  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <p className="count-display">Count: {count}</p>

      <div className="controls">
        <button onClick={increment} disabled={count + step > upperLimit}>
          Increment
        </button>
        <button onClick={decrement} disabled={count - step < (allowNegative ? -Infinity : lowerLimit)}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="settings">
        <label>
          Step Size:
          <input type="number" value={step} onChange={handleStepChange} min="1" />
        </label>

        <label>
          Upper Limit:
          <input type="number" value={upperLimit} onChange={handleUpperLimitChange} />
        </label>

        <label>
          Lower Limit:
          <input type="number" value={lowerLimit} onChange={handleLowerLimitChange} />
        </label>

        <label>
          Allow Negative:
          <input type="checkbox" checked={allowNegative} onChange={toggleAllowNegative} />
        </label>
      </div>
    </div>
  );
};

export default CounterApp;
