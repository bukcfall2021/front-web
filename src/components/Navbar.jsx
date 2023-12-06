import { Link, useLocation } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import RouteNames from "../router/RouteNames";
import { IoMenu, IoCartOutline } from "react-icons/io5";
import DropDown from "./drop-down/DropDown";
import LogoImage from "/assets/logo.png";

const options = [
  {
    name: "Home",
    url: RouteNames.HOME,
  },
  {
    name: "Categories",
    url: "/categories",
  },
  {
    name: "Menu",
    url: `${RouteNames.MENU}/*`,
  },
];

const Navbar = ({ isCartOpen, setIsCartOpen }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="">
        <div className="flex flex-wrap items-center justify-between mx-auto py-3">
          <div className="flex items-center space-x-3">
            <Link to={RouteNames.HOME}>
              <img src={LogoImage} className="h-10 md:h-12" alt="logo" />
            </Link>
          </div>

          <div className="flex md:order-2 gap-x-1 md:gap-x-2 md:space-x-0 items-center">
            <button type="button" className="hover:scale-105 duration-150 p-2 text-2xl text-black ">
              <LuSearch />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              type="button"
              className={`hover:scale-105 duration-150 p-2 text-2xl ${
                isCartOpen ? "text-primary" : "text-black"
              } `}
            >
              <IoCartOutline />
            </button>

            <Link
              to={RouteNames.LOG_IN}
              type="button"
              className="text-white bg-primary hover:opacity-80 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 md:px-10  py-3 text-center"
            >
              Login
            </Link>

            <button
              onClick={() => setIsNavbarOpen((p) => !p)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl text-gray-500 bg-gray-100 border rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              {isNavbarOpen ? <RxCross2 /> : <IoMenu />}
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
              {options.map((item) => (
                <li key={item.url}>
                  <Link
                    to={item.url}
                    className={`block py-2 px-3 md:p-0  rounded hover:bg-gray-100 
                            md:hover:bg-transparent md:hover:text-primary ${
                              location.pathname.includes(item.url) ? "text-primary" : "text-black"
                            }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-2 w-full">
          <DropDown isOpen={isNavbarOpen} className={""}>
            {options.map((item) => (
              <div key={item.url}>
                <Link to={item.url}>
                  <div className="px-4 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary ">
                    {item.name}
                  </div>
                </Link>
              </div>
            ))}
          </DropDown>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
