import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users) // it is an array of objects
  return (
    // <div className='h-full w-2/3 bg-blue-300 p-6 '>
    <div className='h-full w-2/3 px-5 py-4 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl '>
      {/* <RightCard/>
      <RightCard/>
      <RightCard/> */}

      {props.users.map(function (elem) {
        // return 'hello'
        return <RightCard img={elem.img} tag ={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
