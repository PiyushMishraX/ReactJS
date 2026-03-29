import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const RightCard = () => {
  return (
    // <div className='h-full w-80  rounded-4xl overflow-hidden relative'>
    <div className="h-full w-70  rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <div className=" absolute top-0 left-0 h-full w-full bg-amber-300 p-8 flex flex-col justify-between ">
        <h2 className=" bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-bold">1</h2>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            consequatur ab maiores laudantium, itaque nisi.
          </p>
          <div>
            <button>Satisfied</button>
            <button>
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
