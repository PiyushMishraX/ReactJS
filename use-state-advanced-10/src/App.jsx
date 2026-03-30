// import React, { useState } from "react";

// const App = () => {
//     // const [num, setNum] = useState(10)
//     const [num, setNum] = useState({user:"Piyush", age:20})
//     // const [num, setNum] = useState([10,20,30])

//     // const btnClicked = ()=>{
//     //   // console.log('button clicked')

//     //   console.log(num); // 10 for first click
      
//     //   // setNum(20) // it is asynchronus 
//     //   setNum(num+1) // it is asynchronus 
//     //   console.log(num);  // still 10 after click  // ui updates but it does not bcz ui takes some time to update but log runs right after
//     // }

//     // const btnClicked = ()=>{
//     //   setNum(num) // react doesn't rerender , react identifies if same value is entered if yes not rerendering 
//     // }


//   // object.array updation
//     const btnClicked = ()=>{      

//       // console.log(num.user) 

//       // updation method 1 destructuring 
//       // arr refer to the memory points but the memory place dosen't have data it just have refernce to datas // refernce variables 

//       // const newNum = {...num} // now no same reference point
//       // newNum.user= 'Aman'
//       // newNum.age= 24 
//       // setNum(newNum)
//       // // console.log(num)  


//       // Method 2
//       // setNum(prev=>({...prev,age:50}))
//     }


//   // array
//     // const btnClicked = ()=>{
//     //   // const newNum = [...num]
//     //   // newNum.push(99)
//     //   // setNum(newNum)

      
//     // }



//   return (
//     <div>
//       {/* <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button> */}
      
//       {/* <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>click</button> */}

//       {/* <h1>{num}, {num[0]}</h1> */}
//       {/* <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button> */}
//     </div>
//   )
// }

// export default App





import React, { useState } from "react";

const App = () => {

  const [num, setNum] = useState(10)

  const btnClicked =()=>{
    // num updates only one times // bcz pocess happens faster so the elements won't idetify value of num or just change the same vlaue so the intended process do not ha[[ens]]
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)

    // setNum(num+1)
    // setNum(num+2) // changes to +2 but the first value is passe again to next which changes og value to +1 again in prints
    // setNum(num+1)

    // batch update
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))

  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
