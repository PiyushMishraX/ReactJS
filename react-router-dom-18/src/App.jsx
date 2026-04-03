import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      {/* <h2>This is navbar</h2>  */}
      {/* above will show in every page */}

      <div className='nav'>

        <h3>Website</h3>
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} /> 
        {/* react router dom se single page application ( SPA ) bana hai , no reloading and url changes */}

        <Route path='/contact' element={<Contact />} /> 

      </Routes>

      <h2>This is  footer</h2>
      {/* see in every page */}
    </div>
  )
}

export default App





// routing -> switching pages

// react do not have inuilt routing so we use react router dom library

// browser router

// routes 
// website.com = / // main page
// website.com/courses = /courses
// website.com/about = /about

// hash router routes - it is not sent to server
// website.com = /#/                        // main page
// website.com/courses = /#/courses
// website.com/about = /#/about

//memiey outer
// data stored in memory unlike in browser router stroin gin history // used mostly in react native 

// static router next js