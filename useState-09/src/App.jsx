import React, { useState } from 'react' // import use State first then use it

const App = () => {
  // let a =20;

  // function changeA() {
  //   console.log(a);
  //   // a =30;
  //   a ++;
  //   console.log(a); // no changes bcz we are trying to change ourself we need to change through react
  // }

  // use state snippet
  // const [first, setfirst] = useState(second) // use es7+ react extension for snippets etc


  // derffine variables as this 
  // const [a, seta] = useState(20)
  // const [num, setNum] = useState('aman')
  
  const [num, setNum] = useState(0) // let/const num doesn't change in view

  function changeNum() {
    // num = 30;// no
    setNum(30);
  }
  
  return (
    <div>
      {/* <h1>Value of a is {a}</h1>
      <button onClick={changeA} >Click</button> */}

      <h1>Value of num is {num}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
