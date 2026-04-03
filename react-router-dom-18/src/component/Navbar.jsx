import React from 'react'
import { Link } from 'react-router-dom'

// to stop reloading use link
const Navbar = () => {
  return (
    <div>
        <div className='nav'>

        <h3>Website</h3>
        <div>
          {/* <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a> */}
          <Link to='/' >Home</Link>
          <Link to='/About' >ABout</Link>
          <Link to='/Contact'>Contact</Link> 
          {/*  not in the {} use '' for now */}
        </div>
      </div>
    </div>
  )
}

export default Navbar