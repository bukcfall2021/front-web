import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ToggleButton = () => {
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [isForwardClicked, setIsForwardClicked] = useState(false);

  const handleBackClick = () => {
    setIsBackClicked(true);
    setIsForwardClicked(false);
  };

  const handleForwardClick = () => {
    setIsBackClicked(false);
    setIsForwardClicked(true);
  };

  return (
    <div className="flex justify-between items-center m-auto">
      <div
        className={`w-10 h-10 rounded-full flex items-center bg-${isBackClicked ? "primary" : "gray-200"}`}
        onClick={handleBackClick}
      >
        <IoIosArrowBack className="mx-auto" />
      </div>
      <div
        className={`w-10 h-10 rounded-full flex items-center bg-${isForwardClicked ? "primary" : "gray-200"}`}
        onClick={handleForwardClick}
      >
        <IoIosArrowForward className="mx-auto" />
      </div>
    </div>
  );
};

export default ToggleButton;
