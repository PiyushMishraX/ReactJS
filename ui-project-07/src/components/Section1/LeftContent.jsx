import React from 'react'
import { RiArrowRightUpLine } from '@remixicon/react';
// import 'remixicon/fonts/remixicon.css';



const LeftContent = () => {
  return (
    <div className='h-full w-1/4 bg-blue-600'>
      <div>

      </div>
      <div className='text-8xl'>
        {/* <RiArrowRightUpLine /> it overrides any css property given abive bcz it is set  to 96px or size-24 */}
        {/* <i className="ri-arrow-right-up-line"></i> */}

        {/* <RiArrowRightUpLine className="size-24 text-white" /> class name method */}

        <RiArrowRightUpLine size={96} /> {/* prop method */}
      </div>
    </div>
  )
}

export default LeftContent
