// import React, { useContext } from 'react'
// import { PostDataContext } from '../context/ThemeContext'

// const Nav2 = (props) => {

//   const data = useContext(PostDataContext)
//   return (
//     <div className='nav2'>
//         <h4>Home</h4>
//         <h4>About</h4>
//         <h4>Contact</h4>
//         {/* <h4>Services</h4> */}
//         <h4>{data}</h4>
//         <h4>{props.theme}</h4> 
//         {/* it took so much eeforts just so theme can be in Nav2 from App thrugh props drilling */}
//         {/* so we will create context */}
    
//     </div>
//   )
// }

// export default Nav2



import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';


const Nav2 = () => {

  // const data = useContext(ThemeDataContext)
  // console.log(data); // as array

  const [theme,setTheme] = useContext(ThemeDataContext)
  // console.log(theme); // by destructuring
  
  

  return (
    <div>
      <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <h4>{theme}</h4> 
    
    </div>
    </div>
  )
}

export default Nav2
