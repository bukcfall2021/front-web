import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ToggleButton = ({numbers,setNumbers}) => {
  const IncNumber=()=>{
    if (numbers < 4) {
      setNumbers((prev)=>prev+1)
    }
  }
  const DecNumber=()=>{
    
    if (numbers > 0) {
      setNumbers((prev)=>prev-1)
    }
  }
  return (
    <div className="flex justify-between items-center m-auto">
      <div className={`w-10 h-10 rounded-full flex items-center bg-gray-200`} onClick={()=>DecNumber()}>
        <IoIosArrowBack className="mx-auto" />
      </div>
      <div className={`w-10 h-10 rounded-full flex items-center bg-gray-200`} onClick={()=>IncNumber()}>
        <IoIosArrowForward className="mx-auto" />
      </div>
    </div>
  );
};

export default ToggleButton;
