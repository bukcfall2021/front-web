import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import img5 from '../assets/burgers/burger1.png'


const Cards = ({ item }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div to={`/menu/item1`} className="shadow-lg relative mr-5 md:my-5 rounded-3xl bg-white">
      <div
        className={`rating gap-1 absolute right-0 rounded-bl-3xl top-0 p-4 h-12 heartStar bg-green-500 rounded-tr-3xl ${
          isHeartFilled ? "text-red-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-6 h-5 cursor-pointer" />
      </div>
      <Link to={`/menu/item1`}>
        <figure className="hover:scale-105 transition-all duration-300 md:h-56 rounded-tl-3xl rounded-tr-3xl flex justify-center items-center">
          <img src={img5} alt="Pastry" className="max-h-full max-w-full" />
        </figure>
      </Link>
      <div className="h-32 mx-6">
        <Link to={`/menu/item1`}><h1 className="font-bold text-lg">pizza1</h1></Link>
        <p>Lorem ipsum dolor sit amet loribus amet velit.</p>
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
  );
};

export default Cards;
