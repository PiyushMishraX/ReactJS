// useCallback snippet --
// const memoizedCallback = useCallback(() => {
//   doSomething(a, b);
// }, [a, b]);

import { useState, useCallback } from 'react';

// Memoized child component
const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

import React from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Without useCallback, handleIncrement would be recreated every time 
  // setOtherState triggers a re-render, forcing <Button> to re-render.
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Empty deps: function reference never changes

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleIncrement}>Increment</Button>
      
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State ({otherState.toString()})
      </button>
    </div>
  );
}

export default App

// useCallback is a React Hook that caches a function definition between renders so its reference doesn't change unnecessarily. This prevents expensive child components from re-rendering when passed callbacks as props.