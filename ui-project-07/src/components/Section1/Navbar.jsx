import React from "react";

const Navbar = () => {
  return (
    // to check tailwind properties search and see tailwind website
      <div className="flex items-center justify-between py-5 px-18">
        <h4 className="bg-black text-white uppercase px-6 py-2 rounded-full  ">
          Target Audience
        </h4>
        <button className="bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm">digital Banking Platform</button>
      </div>
  );
};

export default Navbar;
