import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import img5 from "/assets/burgers/burger1.png";

const ExtrasCard = ({ item }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div
      style={{
        aspectRatio: 3.75 / 4,
      }}
      to={`/menu/item1`}
      className="w-full h-full  shadow-lg relative  rounded-3xl bg-white "
    >
      <Link to={`/menu/item1`}>
        <figure className="  h-4/6 rounded-tl-3xl rounded-tr-3xl flex justify-center items-center">
          <img src={img5} alt="Pastry" className="max-h-full max-w-full" />
        </figure>
      </Link>
      <div className="text-center mx-6">
        <Link to={`/menu/item1`}>
          <h1 className="font-bold text-lg">pizza1</h1>
        </Link>
        
        <div className="flex justify-center items-center mb-2">
          <h5 className="font-semibold ">
            <span className="text-sm text-red-500">$ </span> 50
          </h5>
          
        </div>
      </div>
    </div>
  );
};

export default ExtrasCard;
