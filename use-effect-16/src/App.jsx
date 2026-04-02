import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [num2, setnum2] = useState(100);

//   // function random() {
//   // const a = Math.random()
//   // console.log('hello');// ye task main task jaisa nahi chalana hai , side stack mai chalana hai

//   // mousinting for setNum(num+1)
//   //   useEffect(() => {
//   //   console.log('use effect is running');
//   // });

//   // }

//   // console.log("1. Component is rendering...");

//   // useEffect(() => {
//   //   console.log("2. useEffect fired! (Side Stack)");
//   // }, [num]);

//   // dependencies
//   useEffect(() => {
//     console.log("use effect is running");
//   }, [num]); //depend on num
//   // }, []); // no dependies changes wherever an eleent change

//   return (
//     // <div onClick={random} >App</div>
//     <div>
//       <h1> value of num is {num}</h1>
//       <h1> value of num2 is {num2}</h1>
//       <button 
//       //   onClick={() => {
//       //     // setNum(10)
//       //     setNum(num + 1);
//       //     // setnum2(num2 + 1);

      
//       //   }}
//       // onDoubleClick={()=>{
//       //   setnum2(num2 + 1);
//       // }}  
//         onMouseEnter={() => {
//           // setNum(10)
//           setNum(num + 1);
//           // setnum2(num2 + 1);

      
//         }}
//       onMouseLeave={()=>{
//         setnum2(num2 + 1);
//       }}  
//       >
//         click
//       </button>
//     </div>
//   );
// };

// export default App;






const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('value of A changes');
  }
  function bChanging(){
    console.log('value of B changes');
  }
   
  // useEffect(() => {
  //   console.log("use effect is running...");
  // })

  // useEffect(() => {
  //   console.log("use effect is running...");
  // },[]) // have dependecies which is '' empty string a value assigned to this changes the it will run

  // useEffect(() => {
  //   console.log("use effect is running...");
  // },[a])
  // },[b])
  // },[a,b])

  useEffect(() => {
    aChanging()
    // console.log("use effect is running...");
  },[a])
  useEffect(() => {
    bChanging()
  },[b])
  

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a+1)
      }}>Change A</button>

      <button
      onClick={()=>{
        setB(b+1)
      }}>Change B</button>
    </div>
  )
}

export default App