import React from "react";
import notify from "../utils/notify";

const OrderButton = ({ onClick }) => {
  return (
    <div
      className="w-full bg-primary h-16 my-10 rounded-md flex justify-center items-center text-white font-bold font-inter text-2xl"
      onClick={onClick}
    >
      Order Now
    </div>
  );
};
export default OrderButton;
