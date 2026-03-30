import React, { useState } from "react";

const App = () => {

  

  const [title, setTitle] = useState('')
  // const [title, setTitle] = useState('Piyush')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form submitted');
    
  }

  return (
    <div>
      {/* <form onSubmit={submitHandler} > */}
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} >
        <input 
        type="text" 
        placeholder='Enter your name' 
        // value='' // nothing will  be written in input box or just cleared as soon as entered to empty string and the e.target.bvalue will be single letter // value tells current value of input

        // value = 'Piyush'

        value = {title}
        // onChange={(e)=>{
        //   // console.log('writing..');
        //   // console.log(e);
        //   // console.log(e.target);
        //   console.log(e.target.value);
        // }}/>

        // now react can act on changed value of the input field
        // which is done by two way binding 
        // title -> value -> update -> setvalue(to updated) -> title  
        onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
