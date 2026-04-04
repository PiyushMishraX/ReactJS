import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    // const [theme] = useContext(ThemeDataContext)
    // const [setTheme] = useContext(ThemeDataContext)
    // const [theme,setTheme] = useContext(ThemeDataContext) // need to load both them in setTheme to sue setTheme , else it will not be seen as fucntion bcz it will be set as the first element (setTheme will be set as theme  ) or use [,setTheme]
    const [,setTheme] = useContext(ThemeDataContext)

    const changeTheme = ()=>{

        // setTheme('Dark')
        setTheme('dark')
    }    

  return (
    <div>
      {/* <button onClick={changeTheme}>Change Theme {theme}</button> */}
      <button onClick={changeTheme}>Change Theme </button>
    </div>
  )
}

export default Button