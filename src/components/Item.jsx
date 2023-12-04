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
      <div className="px-8 flex gap-2 py-4 ">
        <img src="/assets/Salads/img3.png" className="h-24 w-24" alt="Egg Salad"></img>
        <div className="flex flex-col py-3 ">
          <h1 className="text-xl font-inter">Egg vegi Salad</h1>
          <span>Extras: Green Onions </span>
          <span>$23.00</span>
        </div>
      </div>

      <div className="flex flex-row gap-6  items-center text-5xl text-green mr-5">
      <Hover  icon={IoIosArrowBack} onClick={decrementCounter}/>
   <span className=' w-24 h-12 rounded-full text-white text-xl flex justify-center items-center ' style={{ backgroundColor: '#39DB4A' }} >{counter}</span> 
   <Hover  icon={IoIosArrowForward} onClick={incrementCounter}/> 
         
   

        </div>
    </div>
  );
};

export default Item;





