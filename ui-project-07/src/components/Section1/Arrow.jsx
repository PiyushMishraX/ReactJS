import React from 'react'
import { RiArrowRightUpLine } from "@remixicon/react";
// import 'remixicon/fonts/remixicon.css';

const Arrow = () => {
  return (
    <div className="text-9xl">
        {/* <RiArrowRightUpLine /> it overrides any css property given abive bcz it is set  to 96px or size-24 */}
        {/* <i className="ri-arrow-right-up-line"></i> */}
        {/* <RiArrowRightUpLine className="size-24 text-white" /> class name method */}
        <RiArrowRightUpLine size={96} /> {/* prop method */}
    </div>
  )
}

export default Arrow
