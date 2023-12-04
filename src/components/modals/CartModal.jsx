import React, { useState } from "react";
import Item from "../Item";
import Address from "../Address";
import Promo from "../Promo";
import PaymentDetails from "../PaymentDetails";
import OrderButton from "../OrderButton";
import OrderModal from "./OrderModal";
import BottomSheet from "../modal-wrappers/BottomSheet";

const CartModal = ({ isOpen, setIsOpen }) => {
  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);

  const openOrderModal = () => {
    setIsOpenOrderModal(true);
  };

  const closeOrderModal = () => {
    setIsOpenOrderModal(false);
  };

  return (
    <div className="">
      <BottomSheet isOpen={isOpen} setOpen={setIsOpen}>
        <div className="px-4 w-full h-fit py-4">
          <div className="text-center font-inter font-semibold text-5xl leading-10 text-black mb-5">
            Your Cart
          </div>
          <div className="flex flex-col gap-5 py-5 ">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>

          <div className=" flex flex-col">
            <Address />
            <Promo />
            <PaymentDetails />
            <OrderButton onClick={openOrderModal} />
          </div>
        </div>
      </BottomSheet>

      {/* Order Completed Modal */}
      <OrderModal isOpen={isOpenOrderModal} closeModal={closeOrderModal} />
    </div>
  );
};

export default CartModal;
