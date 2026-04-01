// import React from 'react'
import axios from 'axios'

const App = () => {

  // async function getData(){
  //   console.log(" daaataaa");

  //   / fetch \
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(response); // gives promise pending without async await        
  // }


  // const getData = async ()=>{
  //   // console.log(" daaataaa");

  //   // / fetch \
  //   // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   // console.log(response); // it works       
  //   // // console.log(response.json()); // it still runs synchronusly     
    
  //   // const data = await response.json() 
  //   // console.log(data);


    
  //   // const response = await fetch('https://jsonplaceholder.typicode.com/todos') // get 200 datas 
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users') // get 200 datas 

  //   console.log(response); 
    
  //   const data = await response.json() 
  //   console.log(data);

  // }

  // using axios
  const getData =  async ()=>{
    // const response = axios .get("https://jsonplaceholder.typicode.com/users") // promises pending if async await not use 
    const response = await axios .get("https://jsonplaceholder.typicode.com/users")  

    console.log(response);
    console.log(response.data); // gives the data value eaily
    

  }



  return (
    <div>
      <button onClick={getData}>get data</button>
    </div>
  )
}

export default App