import React, { useState, useRef, useEffect } from "react";

import Item from "../../components/Item";
import Address from "../../components/Address";
import Promo from "../../components/Promo";
import PaymentDetails from "../../components/PaymentDetails";
import OrderButton from "../../components/OrderButton";
import OrderModal from "../../components/OrderModal";
import ErrorModal from "../../components/ErrorModal";
import BottomSheet from "../../components/BottomSheet";

const Cart = ({ isUserLoggedIn, history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const openOrderModal = () => {
    setIsOpenOrderModal(true);
  };

  const closeOrderModal = () => {
    setIsOpenOrderModal(false);
  };

  const openErrorModal = () => {
    setIsOpenErrorModal(true);
  };

  const closeErrorModal = () => {
    setIsOpenErrorModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Cart</button>
      <BottomSheet isOpen={isOpen} setOpen={setIsOpen}>
        <div className="px-4 w-full h-fit">
          <div className="w-[1728] h-[92] text-center font-inter font-semibold text-5xl leading-10 text-black mb-5">
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
            <OrderButton
              isUserLoggedIn={isUserLoggedIn}
              history={history}
              closeModal={() => {
                setIsOpen(false);
              }}
              openOrderModal={openOrderModal}
              openErrorModal={openErrorModal}
            />
          </div>
        </div>
      </BottomSheet>

      {/* Order Completed Modal */}
      <OrderModal isOpen={isOpenOrderModal} closeModal={closeOrderModal} />

      {/* Error Modal */}
      <ErrorModal isOpen={isOpenErrorModal} closeModal={closeErrorModal} />
    </div>
  );
};

export default Cart;
