import React from 'react'

const App = () => {

  function getData(){
    // console.log(" daaataaa");

    /// fetch \
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1')

    console.log(response);
    
    
  }

  return (
    <div>
      <button onClick={getData()}>get data</button>
    </div>
  )
}

export default App