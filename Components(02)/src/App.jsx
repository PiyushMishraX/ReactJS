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

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Piyush Mishta</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, amet?</p>
      </div>
      {Card()}
    </div>
  )
}

export default App
