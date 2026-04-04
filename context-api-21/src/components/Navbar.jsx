import React from 'react'
import Nav2 from './Nav2'

// const Navbar = (props) => {
//     console.log(props);
//     console.log(props.children);
//     console.log(props.children[0]);
    
//   return (
//     <div className='nav'>
//         <h2>Website</h2>
//         {/* <Nav2 {theme={props.theme}} /> */}
//         {props.children[0]}
//         {props.children[1]}
//         {/* it is basic concept of passing elements
//         thorugh children */}

//         <Nav2 theme={props.theme} />
//     </div>
//   )
// }

// props is an array we can directly use children and theme properties which is being passed , using destructuring // so we can use desired properties only which we help to reduce conflicts and errors
// const Navbar = ({children}) => {
const Navbar = ({children,theme}) => {
    console.log(children);
    
  return (
    <div className='nav'>
        <h2>Website</h2>
        <Nav2 theme={theme} />
    </div>
  )
}

export default Navbar