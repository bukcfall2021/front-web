import React from 'react'

const Promo = () => {
  return (
    <div className=" mt-10 flex flex-col gap-1 md:flex-row justify-between md:items-center w-full font-inter text-md sm:text-xl xl:text-2xl lg:text-xl font-bold leading-58px text-left tracking-wider ">
            Have a Promo Code? Apply Now 
            <input
            type="text"
            className="md:px-10 lg:px-14 px-24 h-12  md:h-14 border-[3px] border-black rounded-xl"
           />
            
        </div>
  )
}

export default Promo;