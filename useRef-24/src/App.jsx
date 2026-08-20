// useRef code snippet -->
// import { useRef } from 'react';

// function SimpleRef() {
//   // 1. Initialize ref
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     // 2. Access or mutate via `.current`
//     inputRef.current.focus();
//   };

//   return (
//     <>
//       {/* 3. Attach to a DOM node */}
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }




import React, { useState, useRef, useEffect } from 'react';

export default function TimerApp() {
  
}



const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerName, setTimerName] = useState('My Workout');

  // Use Case 1: Persistent variable that doesn't trigger re-renders
  const timerIdRef = useRef(null);
  const renderCountRef = useRef(0);

  // Use Case 2: Direct DOM node reference
  const nameInputRef = useRef(null);

  // Track component renders silently
  useEffect(() => {
    renderCountRef.current += 1;
  });

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    
    // Store timer ID in ref so clearTimer can access it without a re-render
    timerIdRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  const handleEditNameClick = () => {
    // Focus and select input text using the DOM ref
    if (nameInputRef.current) {
      nameInputRef.current.focus();
      nameInputRef.current.select();
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h2>{timerName}: {seconds}s</h2>

      {/* DOM Reference Target */}
      <div style={{ marginBottom: '15px' }}>
        <input
          ref={nameInputRef}
          type="text"
          value={timerName}
          onChange={(e) => setTimerName(e.target.value)}
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button onClick={handleEditNameClick}>Edit Name</button>
      </div>

      {/* Timer Controls */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      {/* Render Counter (reads from ref without causing extra renders) */}
      <p style={{ fontSize: '12px', color: '#666' }}>
        Component render count: {renderCountRef.current}
      </p>
    </div>
  );
}

export default App



// useRef -- useRef holds a persistent, mutable value across re-renders without triggering a component render when updated. It is commonly used to directly access DOM nodes or store background state (like timer IDs).