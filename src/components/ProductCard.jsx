import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import img5 from "/assets/burgers/burger1.png";

const ProductCard = ({ item, onClick }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div
      style={{
        aspectRatio: 3.5 / 4,
      }}
      onClick={onClick}
      className="w-full h-full  shadow-lg relative  rounded-3xl bg-white "
    >
      <div
        className={`rating gap-1 absolute right-0 rounded-bl-3xl top-0 p-3 h-6/7 heartStar bg-primary rounded-tr-3xl ${
          isHeartFilled ? "text-red-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-6 h-5 cursor-pointer" />
      </div>
      <Link to={`/menu/item1`}>
        <figure className="  h-4/6 rounded-tl-3xl rounded-tr-3xl flex justify-center items-center">
          <img src={img5} alt="Pastry" className="max-h-full max-w-full" />
        </figure>
      </Link>
      <div className=" mx-6">
        <Link to={`/menu/item1`}>
          <h1 className="font-bold text-lg">pizza1</h1>
        </Link>
        <p className="truncate">
          Lorem ipsum dolor sit amet loribus amet velit Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Minus, rerum quasi, molestiae at explicabo debitis nam, delectus quia temporibus vel amet.
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
  );
};

export default ProductCard;
