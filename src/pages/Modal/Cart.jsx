import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import './styles/CartModal.css';
import Item from "../../components/Item";
import Address from '../../components/Address';
import Promo from '../../components/Promo';
import PaymentDetails from '../../components/PaymentDetails';
import OrderButton from '../../components/OrderButton';
import OrderModal from '../../components/OrderModal';
import ErrorModal from '../../components/ErrorModal';

const Cart = ({ isUserLoggedIn, history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  return (
    <div>
      <button onClick={openModal}>Open Cart</button>
      <Modal
        isOpen={isOpen}
        overlayClassName="overlay"
        className="modal"
        contentLabel="Cart Modal"
        closeTimeoutMS={300}
        ariaHideApp={false}
      >
        <div className="modal-content" ref={modalRef}>
          {/* Your cart content */}

          <div className="w-[1728] h-[92] text-center font-inter font-semibold text-5xl leading-10 text-black mb-5" >
          Your Cart
      </div>
          <div className="flex flex-col gap-5 px-60 py-5 ">
            <Item />
            <Item />
            <Item />
            <Item />
           
            </div>

            <div className=' flex flex-col px-60 '>
            <Address/>
             <Promo/>
            <PaymentDetails/> 
            <OrderButton
            
            isUserLoggedIn={isUserLoggedIn}
            history={history}
            closeModal={closeModal}
            openOrderModal={openOrderModal}
            openErrorModal={openErrorModal}
          />

            </div>
          
        </div>
      </Modal>

      {/* Order Completed Modal */}
      <OrderModal isOpen={isOpenOrderModal} closeModal={closeOrderModal} />

      {/* Error Modal */}
      <ErrorModal isOpen={isOpenErrorModal} closeModal={closeErrorModal} />
    </div>
  );
};

export default Cart;