import React from 'react'
import { useEffect } from 'react';

const App = () => {

  function random() {
    // const a = Math.random()
    // console.log('hello');// ye task main task jaisa nahi chalana hai , side stack mai chalana hai

    useEffect(() => {
      log('use effect i running')
  })
    
    
    
  }
  return (
    <div onClick={random}>App</div>
  )
}

export default App