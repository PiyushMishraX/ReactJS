import React from 'react'
import Card from './components/card'


// not good we should try to kee[ App()] empty
// const App = () => {
//   return (
//     <div>
//       <div className="card">
//         <h1>Piyush Mishta</h1>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, amet?</p>
//       </div>
        // <div className="card">
        //  //         <h1>Piyush Mishta</h1>
        // //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, amet?</p>
        // </div>
//     </div>
//   )
// }

// variableprinitng is possible through {var_name}
const App = () => {
  const user = 'Piyush'
  const age = 20
  return (
    <div>
      <div className="card">
        {/* <h1>user</h1> -- commenting iside react html */} 
        <h1>{user}</h1>
        <h1>hello I am {age} years old</h1>
      </div>
    </div>
  )
}

// const App = () => {
//   return (
//     <div>
//       <div className="card">
//         <h1>Piyush Mishta</h1>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, amet?</p>
//       </div>
//       {Card()}
//     </div>
//   )
// }

export default App
