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
    // num is read only, setNum write only 
    // num = 30;// no
    setNum(30); // only changed part is reloaded 
    // num is constant 
    console.log(num);
    // the value of num is changed after the whole function is run so for first time num prints zero


    setUsername("vijay")
    
  }

  // string 
  const [username, setUsername] = useState('Piyush')
  
  return (
    <div>
      {/* <h1>Value of a is {a}</h1>
      <button onClick={changeA} >Click</button> */}

      <h1>Value of num is {num}</h1><br />
      <h1>Value of user is {username}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
