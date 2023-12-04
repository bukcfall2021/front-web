import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Button = () => {
  return (
    <div className="flex justify-between items-center m-auto">
      <div className="w-10 h-10 rounded-full bg-gray-200 flex  items-center">
        <IoIosArrowBack className="mx-auto" />
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center">
        <IoIosArrowForward className="mx-auto" />
      </div>
    </div>
  );
};

export default Button;
