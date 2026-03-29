import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
// import 'remixicon/fonts/remixicon.css';

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
      <div className="p-6">
        <h3 className="leading-[1.2] text-6xl font-bold mb-7">
          Prospective <br />
          <span>customer</span>
          <br /> segmentation
        </h3>
        <p className="text-xl font-medium text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto
          fugit dolores incidunt quisquam maiores pariatur quo vero et optio!
        </p>
      </div>

      <div className="text-9xl">
        {/* <RiArrowRightUpLine /> it overrides any css property given abive bcz it is set  to 96px or size-24 */}
        {/* <i className="ri-arrow-right-up-line"></i> */}
        {/* <RiArrowRightUpLine className="size-24 text-white" /> class name method */}
        <RiArrowRightUpLine size={96} /> {/* prop method */}
      </div>
    </div>
  );
};

export default LeftContent;
