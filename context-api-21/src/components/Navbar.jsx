import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
    console.log(props);
    console.log(props.children);
    console.log(props.children[0]);
    
  return (
    <div className='nav'>
        <h2>Website</h2>
        {/* <Nav2 {theme={props.theme}} /> */}
        {props.children[0]}
        {props.children[1]}
        {/* it is basic concept of passing elements
        thorugh children */}

        <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar