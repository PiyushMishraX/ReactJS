import React from 'react'

const App = () => {
  let a =20;

  function changeA() {
    console.log(a);
    // a =30;
    a ++;
    console.log(a); // no changes bcz we are trying to change ourself we need to change through react
  }

  
  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeA} >Click</button>
    </div>
  )
}

export default App
