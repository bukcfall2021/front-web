import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Button from "../../components/Button";

const MenuPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center pb-10">
      <div className="max-w-[1024px] w-full px-4">
        <div className="h-20 flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold text-green-500">PIZZAS</h1>
          <div className="w-28 h-10">
            <Button />
          </div>
        </div>
        <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
          {Array(10)
            .fill(null)
            .map((item, index) => (
              <Cards key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
