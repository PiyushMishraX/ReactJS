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


          {/*  not in the {} use '' for now */}
          <Link to='/' >Home</Link>
          {/* <Link to='/About' >About</Link> */}
          <Link to='/about' >About</Link>
          <Link to='/contact'>Contact</Link> 
          {/* <Link to='/product'>Product</Link>  */}
          <Link to='/product'>Products</Link> 
        </div>
      </div>
    </div>
  )
}

export default Navbar