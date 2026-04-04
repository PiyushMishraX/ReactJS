import React from 'react'

const Navbar = (props) => {
    // console.log(props)

    function changeTheme(){
        // console.log('Theme change', props.theme); // light
        console.log('Theme change');
        props.setTheme('Dark') // set dark in parent // because setTheme created in parent
        
    }

  return (
    <div>
        {/* <p>{props.theme}</p> */}
        {/* <button onClick={()=>{
            props.setTheme('Dark')
        }}>Change theme</button> */}
        <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Navbar