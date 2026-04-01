import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [num, setNum] = useState(0)

  function random() {
    // const a = Math.random()
    // console.log('hello');// ye task main task jaisa nahi chalana hai , side stack mai chalana hai

    useEffect(() => {
    console.log('use effect is running');
  }, [num]);
    
    
    
  }
  return (
    // <div onClick={random} >App</div>
    <div >
      <h1>{num}</h1>
      <button onClick={()=>{
        // setNum(10)
        setNum(num+1)
      }}>click</button>
    </div>
  )
}

export default App