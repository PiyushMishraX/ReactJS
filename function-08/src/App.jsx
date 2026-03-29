// import React from 'react'

// const App = () => {

//   function btnClicked() {
//     console.log('button is clicked')
//   }

//   function mouseEnter(){
//     console.log('Mouse Entered')

//   }

// // define all propeties and functionality in one function only or use a final container function
//   function multiple(){
//     btnClicked()
//     mouseEnter()
//   }
//   return (
//     <div>
//       {/* <button onClick={btnClicked()}> Button </button> no like this because fn() runs it before hands  whitout click*/}
//       {/* <button onClick={btnClicked}> Button </button> */}

//       {/* <button  onDoubleClick={btnClicked}> Button </button> */}
//       {/* runs on double click only */}

//       {/* <button onMouseEnter={mouseEnter} onClick={btnClicked}> Button </button> */}

//       {/* <button onClick={btnClicked}> Button </button>
//       <button onClick={btnClicked}>explore this</button> */}

//         {/* <button onClick={function () {
//           console.log('button is clicked')

//         }}> Click here </button> */}

//         <button onClick={()=> {
//           console.log('button is clicked')

//         }}> Click here </button>

//         <button onClick={multiple}> Using multiple function in one </button>

//     </div>
//   )
// }

// export default App

//var a = document.querySelector('h1')

// function hero() {
//   console.log('Hero')
// }

// a.addEventListener('click', function () {
//   console.log('Hero')
// })

// a.addEventListener('click', hero())  // runs automatically
// a.addEventListener('click', hero) // runs when event i happening

// import React from 'react'

// const App = () => {

//   // function inputChanging(){
//   //   console.log('use is Typing');
//   // }

//   function inputChanging(val){
//     console.log(val);
//   }
//   return (
//     <div>
//       {/* <input onClick={()=>{
//         console.log('input par click hua');

//       }} type="text" placeholder='Enter Name' /> */}

//       {/* <input onChange={inputChanging} type="text" placeholder='Enter Name' /> */}

//         {/* passing values without calling the function on compilation time/ automatic running  */}
//         {/* create function directly in event listner so it can take calls(of elem) , then can passon the properties in the other function*/}
//       <input
//       // onClick={(elem)=>{
//       onChange={(elem)=>{
//         // console.log(elem);
//         // console.log(elem.target);
//         // console.log(elem.target.value);
//         inputChanging()
//         inputChanging(elem.target.value)

//       }} type="text" placeholder='Enter Name' />
//     </div>
//   )
// }

// export default App



// mouse move clientX and clientY
// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <div onMouseMove={(elem)=>{
//         // console.log("dance")
//         // console.log(elem)
//         // console.log(elem.clientX)
//         console.log(elem.clientY)
//       }} className="box">

//       </div>
//     </div>
//   );
// };

// export default App;




import React from 'react'

const App = () => {

  const pageScrolling = (elem)=>{
    // console.log('page scrolling..')
    // console.log('page scrolling.. at speed', elem)

    if(elem>0){

      console.log('Scrolling');
    }else{
      console.log('backward scrolling');
      
    }
  }
  return (
    // <div onScroll={pageScrolling}> // wrong one it is on wheel
    // <div onWheel={pageScrolling}>
    <div onWheel={(elem)=>{
      // console.log(elem);
      // console.log(elem.deltaY); // scrolling speed with direction + down , up - / use touchpad to see intensity values to bcz most mouses are notched which sends constant values  like 100 or 125
      
      pageScrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
