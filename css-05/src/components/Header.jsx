import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <h3>Amazon</h3>
      {/* <button>Login</button> */}
      <button className='btn'>Login</button>
      {/* mistakenlly gave btn class to button which applies asme properties as the btn class , which we do not want */}
    </div>
  )
}

export default Header
