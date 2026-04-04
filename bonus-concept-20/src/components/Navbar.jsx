import React from 'react'

const Navbar = (props) => {
    // console.log(props)
  return (
    <div>
        {/* <p>{props.theme}</p> */}
        <button onClick={()=>{
            props.setTheme('Dark')
        }}>Change theme</button>
    </div>
  )
}

export default Navbar