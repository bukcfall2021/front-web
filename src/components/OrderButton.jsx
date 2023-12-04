import React from 'react';

const OrderButton = ({isUserLoggedIn, history ,closeModal, openOrderModal,openErrorModal }) => {
  const handleOrderButtonClick = () => {
   
      closeModal();
      openOrderModal();
    //   openErrorModal();
      
    //  -------route to login page--------
    
    // if (!isUserLoggedIn) {
    //   history.push('/login');
    // } else {
      
    //   const isSuccess = true;

    //   if (isSuccess) {
    //     openOrderModal();
    //   } else {
    //     openErrorModal();
    //   }
    // }
  };

  return (
    <div
      className='w-full h-16 my-10 rounded-md flex justify-center items-center text-white font-bold font-inter text-2xl'
      style={{ backgroundColor: '#39DB4A' }}
      onClick={handleOrderButtonClick}
    >
      Order Now
    </div>
  );
};
export default OrderButton;





































