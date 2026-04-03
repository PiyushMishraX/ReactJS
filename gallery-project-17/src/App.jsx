import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async ()=>{
    // console.log(("data"));

    // axios
    // axios.post('url',{username:'Piyush', password:'piyushihere'})
    // axios.patch // update
    // axios.delete // 



    // const response = await axios.get('https://picsum.photos/v2/list')/
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30') // no same value

    // console.log(response)
    // console.log(response.data)
    
    setUserData(response.data)
    console.log(userData);

    console.log(response.data);
    
  }

  let printUserData = "No user available"

  if(userData.length > 0){
    printUserData = userData.map(function (elem,idx) {
      // return 'hello'
      // return idx
      // console.log(elem.download_url)
      return <div  >
        {/* <img src="elem.download_url" alt="" /> // use curly braces */}
        <img className='h-40 ' src={elem.download_url} alt="" />
      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>
      <button
        onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>
        get data
      </button>

      <div className='flex flex-wrap gap-3'> 
    {printUserData}
      </div>
      
    </div>
  )
}

export default App