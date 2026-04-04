// import React from 'react'
// import Navbar from './components/Navbar'
// import { useState } from 'react'

// const App = () => {

//   const [theme, setTheme] = useState('light')

//   return (
//     <div>
//       {/* using self closing tag */}
//       {/* <Navbar theme={theme}/> */}
//       {/*  */}
//       <Navbar theme={theme}>
//         <h2>This is navbar</h2> 
//         <h2>It is navbar</h2> 
//         {/* it is children which will be passed in props */}
//       </Navbar>
//     </div>
//   )
// }

// export default App



import Button from './components/Button'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div>
      <Navbar />
      <Button />
    </div>
  )
}

export default App