import React from 'react'
import Card from './components/Card.jsx'

// const App = () => {
//   return (
//     <div className='parent'>
//       <div className="card">
//         <img src="https://plus.unsplash.com/premium_photo-1674583794341-50bb046c49a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <h1>Piyush Mishra</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//         <button>View Profile</button>
//       </div>
      
      
//     </div>
//   )
// }


// App is parent and Card is child we can only send data fron parent to child not opposite
// if img is child of Card tgen data can be sent from Card to img not opposite

// const App = () => {
//   return (
//     <div className='parent'>        
//       <Card />      
//       <Card />      
//       <Card />      
//     </div>
//   )
// }

// function a(a){
//   console.log('hello',a);
// }
// a(10) // same as prop

// passing properties
const App = () => {
  return (
    <div className='parent'> 
           {/* Card(Piyush 2)  */}
      <Card user='Piyush 2' />  
    </div>
  )
}


export default App
