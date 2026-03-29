import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 px-18 h-[90vh] bg-amber-950 flex justify-between items-center'>
      {/* Page1Content */}
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content
