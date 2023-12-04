import React from 'react';
import Modal from 'react-modal';
import '../pages/Modal/styles/OrderModal.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const OrderModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="page"
      className="order-modal"
      contentLabel="Order Modal"
      closeTimeoutMS={300}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      {/* Order completed modal content */}
      <div className="modal-content">

      
      <div className='flex flex-col px-2 py-8  w-full h-full'>

        
      <div className= ' flex justify-center items-center rounded-full' >
        <IoIosCheckmarkCircleOutline className='w-44 h-44' style={{ color: '#39DB4A' }}/>
        </div>
        

    
        <div className='flex flex-col h-54 px-4 py-3 rounded-lg shadow-2xl' style={{ BackgrounColor: '#FFFFFF' }}>
        <p className='font-inter text-3xl font-semibold leading-58px mb-3'>Payment Details</p>
          <div className='flex flex-row justify-between'>
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

        <div className='flex mt-2 text-sm'>
        A receipt will be sent directly to the email
        </div>
        
      </div>
      </div>
    </Modal>
  );
};

export default OrderModal;
