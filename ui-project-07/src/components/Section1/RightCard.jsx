import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const RightCard = () => {
  return (
    // <div className='h-full w-80  rounded-4xl overflow-hidden relative'>
    <div className="h-full w-70  rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <div className=" absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between ">
        <h2 className=" bg-white rounded-full h-11 w-11 flex justify-center items-center text-xl font-bold">1</h2>
        <div>
          <p className="text-lg leading-normal text-white mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            consequatur ab maiores laudantium, itaque nisi.
          </p>
          <div className=" flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">Satisfied</button>
            <button className="bg-blue-600 text-white font-medium px-3 py-2 rounded-full " >
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
