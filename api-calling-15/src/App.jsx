import React from 'react'

const App = () => {

  // async function getData(){
  //   console.log(" daaataaa");

  //   / fetch \
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(response); // gives promise pending without async await        
  // }

  const getData = async ()=>{
    // console.log(" daaataaa");

    // / fetch \
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    console.log(response); // it works       
    console.log(response.json()); // it still runs synchronusly      
  }

  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App