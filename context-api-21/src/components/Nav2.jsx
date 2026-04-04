import React from 'react'

const Nav2 = (props) => {
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <h4>{props.theme}</h4> 
        {/* it took so much eeforts just so theme can be in Nav2 from App thrugh props drilling */}
        {/* so we will create context */}
    
    </div>
  )
}

export default Nav2