import React from "react";

const DropDown = ({ children, isOpen, setOpen, className }) => {
  return isOpen ? (
    <div className={`w-full h-fit rounded-md absolute z-50 bg-white shadow-lg ${className}`}>{children}</div>
  ) : (
    <div />
  );
};

export default DropDown;
