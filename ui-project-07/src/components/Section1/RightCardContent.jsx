import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const RightCardContent = () => {
  return (
    <div className=" absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between ">
      <h2 className=" bg-white rounded-full h-11 w-11 flex justify-center items-center text-xl font-bold">
        1
      </h2>
      <div>
        <p className="text-lg leading-relaxed text-white mb-14">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          consequatur ab maiores laudantium, itaque nisi.
        </p>
        <div className=" flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">
            Satisfied
          </button>
          <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full ">
            <RiArrowRightLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
