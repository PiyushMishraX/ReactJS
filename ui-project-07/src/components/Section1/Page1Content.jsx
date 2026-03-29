import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    // <div className='py-10 px-18 h-[90vh] flex gap-10 items-center'>
    <div className='py-8 px-18 h-[90vh] flex gap-10 items-center'>
      {/* Page1Content */}
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
