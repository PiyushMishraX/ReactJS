import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    
    // it is used in features such as returning to mainpage after  login
    // use naviagte is also ussd for history it tracks page visited and save them

    // const navigate = useNavigate()

    // const btnClicked = ()=>{
    //     // console.log('button is clicked');
    //     navigate('/') // the page goes to home page
    // }

    return (
    <div>
        {/* <button onClick={btnClicked} className=' bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scle-95'>Return to Homepage</button> */}

        {/* <button onClick={()=>{
            navigate('/')
        }} className=' bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scle-95'>Return to Homepage</button>
        <button onClick={()=>{
            navigate(-1) // goes to the previous page such as product etc not just home 
        }} className=' bg-emerald-400 px-5 py-2 rounded m-2 cursor-pointer active:scle-95'>Return to Back</button> */}

        <h1>About Page</h1>
    </div>
  )
}

export default About