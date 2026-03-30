import React, { useState } from "react";

const App = () => {
    const [num, setNum] = useState(10)

    const btnClicked = ()=>{
      // console.log('button clicked')

      console.log(num); // 10 for first click
      
      // setNum(20) // it is asynchronus 
      setNum(num+1) // it is asynchronus 
      console.log(num);  // still 10 after click  // ui updates but it does not bcz ui takes some time to update but log runs right after
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
