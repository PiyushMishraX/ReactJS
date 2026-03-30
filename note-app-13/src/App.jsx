import React from 'react'

const App = () => {
  return (
    <div >
      <form className="flex p-10 justify-between ">
        <input
         type="text" 
         placeholder="Enter Notes Heading" 
         />
        <input 
        type="text"
        placeholder="Write details"
        className="" />
      </form>
    </div>
  )
}

export default App