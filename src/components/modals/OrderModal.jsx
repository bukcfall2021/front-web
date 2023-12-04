import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import CenterModal from "../modal-wrappers/CenterModal";

const OrderModal = ({ isOpen, closeModal }) => {
  return (
    <CenterModal
      isOpen={isOpen}
      setOpen={() => {
        closeModal();
      }}
    >
      <div className="flex flex-col py-8 h-full bg-white rounded-[50px] mx-4 max-w-[500px] w-full px-4">
        <div className=" flex justify-center items-center rounded-full">
          <IoIosCheckmarkCircleOutline className="w-44 h-44 text-primary" />
        </div>

        <div className="flex flex-col h-54 px-4 py-3 rounded-lg shadow-2xl">
          <p className="font-inter text-3xl font-semibold leading-58px mb-3">Payment Details</p>
          <div className="flex flex-row justify-between">
            <div>
              <p>Order No</p>
              <p>Total</p>
              <p>Date & Time</p>
              <p>Name</p>
              <p>Email</p>
            </div>

            <div>
              <p>1455997836</p>
              <p>Rs.2000</p>
              <p>12.03.23-21:14:10</p>
              <p>Aisha Khan</p>
              <p>aisha@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex mt-2 text-sm">A receipt will be sent directly to the email</div>
      </div>
    </CenterModal>
  );
};

export default OrderModal;
