import React, { useState } from "react";
import img5 from "/assets/Pizzas/pizza2.png";
import { FaStar } from "react-icons/fa";
import ExtrasCard from "../ExtrasCard";
import Hover from "../Hover";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BottomSheet from "../modal-wrappers/BottomSheet";

const ProductModal = ({ id, open, setOpen }) => {
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
    <BottomSheet isOpen={open} setOpen={setOpen}>
      <div className="w-full">
        <div className="flex flex-row justify-center items-center">
          <div className="flex-[.3] p-5">
            <img src={img5} />
          </div>
          <div className="flex-[.7]">
            <h1>Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse est vitae iusto ipsum quas!
              Voluptatem dolore reiciendis minus vel temporibus, mollitia vitae ut ducimus incidunt id
              provident neque ab voluptatum.
            </p>
            <div className="flex justify-between items-center mb-2">
              <h5 className="font-semibold ">
                <span className="text-sm text-red-500">$ </span> 50
              </h5>
              <div className="w-10 h-10 flex justify-between items-center">
                <FaStar className="text-yellow-500 " />
                4.5
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>Extras</h1>
        </div>
        <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
          {Array(4)
            .fill(null)
            .map((item, index) => (
              <ExtrasCard key={index} />
            ))}
        </div>
        <div className="w-full flex flex-row">
          <div className="flex flex-row gap-6  items-center text-5xl text-green mr-5">
            <Hover icon={IoIosArrowBack} onClick={decrementCounter} />
            <span
              className=" w-24 h-12 rounded-full text-white text-xl flex justify-center items-center "
              style={{ backgroundColor: "#39DB4A" }}
            >
              {counter}
            </span>
            <Hover icon={IoIosArrowForward} onClick={incrementCounter} />
          </div>
          <div className="grow flex flex-row justify-center items-center">
            <span
              className=" w-[80%] p-5 h-12 rounded-full text-white text-xl flex justify-center items-center "
              style={{ backgroundColor: "#39DB4A" }}
            >
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </BottomSheet>
  );
};

export default ProductModal;
