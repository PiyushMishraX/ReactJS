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



    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')

    // console.log(response)
    // console.log(response.data)
    
    setUserData(response.data)

    console.log(userData);
    
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button
        onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>
        get data
      </button>
      
    </div>
  )
}

export default App