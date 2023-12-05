import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ToggleButton = () => {
  return (
    <div className="flex justify-between items-center m-auto">
      <div className={`w-10 h-10 rounded-full flex items-center bg-gray-200`}>
        <IoIosArrowBack className="mx-auto" />
      </div>
      <div className={`w-10 h-10 rounded-full flex items-center bg-gray-200`}>
        <IoIosArrowForward className="mx-auto" />
      </div>
    </div>
  );
};

export default ToggleButton;
