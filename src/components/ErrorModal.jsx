import React from 'react';
import Modal from 'react-modal';
import '../pages/Modal/styles/ErrorModal.css';

const ErrorModal = ({ isOpen, closeModal }) => {

  const CloseButton = () => {
    closeModal(); 
  };


  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="page"
      className="error-modal"
      contentLabel="Error Modal"
      closeTimeoutMS={300}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      {/* Error modal content */}
      <div className="modal-content">

      <div className='flex flex-col justify-center gap-2'>
     
      <p className='flex justify-center items-center'>Error</p>
      <p className='flex justify-center items-center'>There was an error while placing order.</p>
      
      <p className=' flex justify-center items-center text-white bg-red-600 font-normal font-sans text-xl py-1' onClick={CloseButton}> OK</p>
      </div>
       
      </div>
    </Modal>
  );
};

export default ErrorModal;
