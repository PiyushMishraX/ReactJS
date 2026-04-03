import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    // console.log(("data"));

    // axios
    // axios.post('url',{username:'Piyush', password:'piyushihere'})
    // axios.patch // update
    // axios.delete // 



    // const response = await axios.get('https://picsum.photos/v2/list')/
    // const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30') // no same value
    // const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=15') 

    // for multiple pages // use backtick or template literal
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`) 

    // console.log(response)
    // console.log(response.data)
    
    setUserData(response.data)
    console.log(userData);

    console.log(response.data);
    
  }

  useEffect(function () {
    getData() // loading on sidestack without clickking
  // },[]) 
  },[index]) // now it will be called whenever index reloads

  // let printUserData = "No user available"
  let printUserData = <h3 className='text-gray-400 text-xs'>No User Available</h3>

  if(userData.length > 0){
    printUserData = userData.map(function (elem,idx) {
      // return 'hello'
      // return idx
      // console.log(elem.download_url)
      return <div key={idx} >

      <a href={elem.url} target='_blank'>
        {/* <div className='h-40 w-44 overflow-hidden bg-white rounded-xl' > */}
        <div className='h-40 w-44 overflow-hidden  rounded-xl' >
        {/* <img src="elem.download_url" alt="" /> // use curly braces */}
        <img className='h-full w-full object-cover ' src={elem.download_url} alt="" />
      </div>
      <h2 className=' font-bold text-lg'>{elem.author}</h2>
      </a>
      
      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>

      <h1 className=' fixed bg-red-500 text-6xl'>{index}</h1> 
      {/* <button
        onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>
        get data
      </button> */}

      <div className='flex flex-wrap gap-4 p-2'> 
          {printUserData}
      </div>

      <div className='flex gap-6 justify-center items-center '>
        <button 
        className=' bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95 '
        onClick={()=>{
          // console.log("Prev button clicked");
          if(index>1){
            setIndex(index-1)

          }
          
        }}
        >
          Prev
          </button>
        <button 
        className=' bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95 '
        onClick={()=>{
          // console.log("Next button clicked");
          setIndex(index+1)
          
        }}
        >
          Next
          </button>
      </div>
      
    </div>
  )
}

export default App