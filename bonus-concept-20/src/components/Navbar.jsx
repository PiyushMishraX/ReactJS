import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <p>{props.theme}</p>
        <button>Change theme</button>
    </div>
  )
}

export default Navbar