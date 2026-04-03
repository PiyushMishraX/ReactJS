import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    // use params hook
    const params = useParams()
    
    console.log(params);


  return (

    <div>
        <h1>Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail