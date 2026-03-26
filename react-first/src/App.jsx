// function App(){
//   // return 'hello'
//   return <h1>hello</h1>
// }
// export default App
// exporting the app to main jsx as deafult 

// rafce - react arrow fn export component
import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>App</h1>
//       <h2>App</h2>
//     </div>
//     // <h3>give error </h3>
//     // return "hello" 10 // do not works // one return at a time  // pass inisde div only 
//   )
// }

// const App = () => {
//   return (
//     <div id='parent'>
//       <h1 id='child1'>App</h1>
//       <h2 id='child2'>App</h2>
//     </div> 
//   )
// }

// const App = () => {
//   return (
//     <div id='parent'>
//       <h1 id='child1'>App</h1>
//       <h2 id='child2'>App</h2>
//     </div> 
//     <div id="uncle">
//       // not possible give error create fragment
//     </div>
//   )
// }


// const App = () => {
//   return (
//     <div>
//       <div id='parent'>
//         <h1 id='child1'>App</h1>
//         <h2 id='child2'>App</h2>
//       </div> 
//       <div id="uncle">
//         // not possible give error create fragment
//       </div>
//     </div>
//   )
// }

//  FRAGMENT -> with empty tag that rappes thses element and the tags do not appear in structure

const App = () => {
  return (
    <>
      <div id='parent'>
        <h1 id='child1'>App</h1>
        <h2 id='child2'>App</h2>
      </div> 
      <div id="uncle">

      </div>
    </>
  )
}


export default App
