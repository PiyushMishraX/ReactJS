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
      <Card user='Piyush' age1='20' age2={20} img='https://plus.unsplash.com/premium_photo-1674583794341-50bb046c49a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D'/>  
      {/* for number array variable etc use {} */}
      <Card user='Aditya' age1='20' age2={24} img='https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjByZW5kZXJ8ZW58MHx8MHx8fDA%3D'/> 
      <Card user='aman' age1='27' age2={20}  img='https://images.unsplash.com/photo-1634848860108-6d8368f5a0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjByZW5kZXJ8ZW58MHx8MHx8fDA%3D'/> 
    </div>
  )
}


export default App
