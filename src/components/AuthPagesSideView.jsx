import React from "react";
import ChefImage from "/assets/Auth-Page/chef.png";
import RectangleImage from "/assets/Auth-Page/rectangle.png";

const AuthPagesSideView = () => {
  return (
    <div
      className={`
      md:w-[50%]
      lg:w-[45%]
      hidden h-screen  relative bg-primary overflow-hidden
      md:flex flex-col items-center justify-end
     `}
    >
      <img src={RectangleImage} className="absolute  w-full" />
      <img className="w-[90%] z-10" src={ChefImage} />
    </div>
  );
};

export default AuthPagesSideView;
