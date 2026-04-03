import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()
    
  return (
    <div className='py-2 px-5 bg-cyan-700'>
        <button onClick={()=>{
            navigate('/')
        }} className=' bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scle-95'>Return to Homepage</button>
        <button onClick={()=>{
            navigate(-1) // goes to the previous page such as product etc not just home 
        }} className=' bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scle-95'>Return to Back</button>
    </div>
  )
}

export default Navbar2