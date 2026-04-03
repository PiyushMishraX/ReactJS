import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    // use params hook
    const params = useParams() // it object of passed parameters passed 
    
    // console.log(params);
    // console.log(params.courseId);


  return (

    <div>
        {/* <h1>Course Detail Page</h1> */}
        <h1>{params.courseId} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail