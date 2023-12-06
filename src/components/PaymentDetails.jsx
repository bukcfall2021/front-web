import React from 'react'

const PaymentDetails = () => {
  return (
    <div className="flex flex-col mt-5  ">
    <div className='font-inter text-3xl font-semibold leading-58px text-left mb-3'> <h1>Payment Details</h1> </div>
       
      <div className="flex justify-between w-full mb-4">
        <p>Discount</p>
        <p className=' text-primary'>20%</p>
      </div>
      <div className="flex justify-between w-full mb-4">
        <p>Total Price</p>
        <p className=' text-primary'>Rs.2000</p>
      </div>
      <div className="flex justify-between w-full mb-4">
        <p>Delivery Time</p>
        <p className=' text-primary'>1 Hour</p>
      </div>
    </div>
  )
}

export default PaymentDetails;