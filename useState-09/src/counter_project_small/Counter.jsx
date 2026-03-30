import React, { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0)

    function increaseNum(){
        console.log('increasing');
        // setNum(20)
        // setNum(num++) // ++ not work here
        setNum(num+1)
    }
    function decreaseNum(){
        console.log('decreasing');
        // setNum(10)
        // setNum(num--) // -- not work here
        setNum(num-1)
    }

    function jump5Num(){
        console.log('decreasing');
        setNum(num+5)
    }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>
    </div>
  );

//   return (
//     <div className="counter">
//       <button onClick={increaseNum} className="btn1">Increase</button>
//       <span className="text">{num}</span>
//       <button onClick={decreaseNum} className="btn2">decrease</button>
//     </div>
//   );
};

export default Counter;
