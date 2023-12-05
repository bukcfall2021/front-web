import React, { useState } from 'react';
import Hover from './Hover';
import {IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Item = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  
  return (
    <div className="flex rounded-2xl shadow-xl justify-between bg-white" >
      <div className="md:px-8 px-2 flex gap-2 py-4 ">
        <img src="/assets/Salads/img3.png" className="md:h-24 md:w-24 w-16 h-20 relative top-[25%] -transform-y-[75%] md:static " alt="Egg Salad"></img>
        <div className="flex flex-col py-3 bg-green text-sm sm:text-md md:text-xl font-inter">
          <h1 >Egg vegi Salad</h1>
          <span>Extras: Green Onions </span>
          <span>$23.00</span>
        </div>
      </div>

      <div className="flex flex-row gap-1 md:gap-6  items-center text-green mr-2 md:mr-5">
      <Hover  icon={IoIosArrowBack} onClick={decrementCounter}/>
   <span className='w-16 h-8 md:w-24 md:h-12 rounded-full text-white text-xl flex justify-center items-center ' style={{ backgroundColor: 'rgb(231, 147, 21)' }} >{counter}</span> 
   <Hover  icon={IoIosArrowForward} onClick={incrementCounter}/> 
        </div>


    </div>
  );
};

export default Item;





