import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
      {/* <h1>Theme is Light</h1> */}
      <h1>Theme is {theme}</h1>

      <Navbar theme={theme} />
    </div>
  )
}

export default App

// data won't go from bottom to tops

// app -> navbar -> sidebar -> userprofile ->username
// also sidebar -> theme 
// now wan't to sent data from theme to app which is not possible through normal props drilling so we use trick