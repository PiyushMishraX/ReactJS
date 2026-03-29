import React from "react";
// import { RiArrowRightUpLine } from "@remixicon/react";
import HeroText from "./HeroText";
import Arrow from "./Arrow";
// import 'remixicon/fonts/remixicon.css';


const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
      <HeroText/>
      <Arrow/>
    </div>
  );
};

export default LeftContent;
