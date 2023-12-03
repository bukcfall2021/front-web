import React, { useState } from "react";
import ChefImage from "/assets/Auth-Page/chef.png";
import RectangleImage from "/assets/Auth-Page/rectangle.png";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import RouteNames from "../../../router/RouteNames";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex overflow-y-hidden">
      <div className="hidden md:block relative h-[100vh] w-[45%] bg-primary overflow-hidden ">
        <img
          src={RectangleImage}
          className=" relative sm:top-80 lg:top-52 w-[30rem] lg:w-[40rem] sm:h-[30rem] "
        />
        <img className=" absolute  bottom-0 z-10 h-[30rem] lg:h-[40rem]" src={ChefImage} />
      </div>
      <form className="flex py-2 flex-col " onSubmit={handleSubmit}>
        <Link to={RouteNames.LOG_IN}>
          <div className="flex items-center text-[#8692A6] gap-2 py-5 px-5 cursor-pointer text-base">
            <IoIosArrowBack className="text-center" />
            <span className="text-[#8692A6]">Back to Login</span>
          </div>
        </Link>
        <div className="flex flex-col px-24 xl:px-64 ">
          <div className="font-inter">
            <h1 className="font-extrabold text-2xl">Account Signup</h1>
            <p className="text-sm leading-5 py-4">Become a member and enjoy exclusive deals and discounts.</p>
          </div>
          <label for="name" className="text-[#696F79] text-sm py-2 font-inter ">
            Full Name
          </label>
          <input
            autoFocus
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            className=" border-[#c2bebe] border-2 rounded h-10 p-1 focus:outline-none"
          />
          <label for="email" className="text-sm py-2 font-inter text-[#696F79]">
            Email Address
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
            className=" border-[#c2bebe] border-2 rounded h-10 p-1 focus:outline-none"
          />

          <label htmlFor="password" className="text-sm py-2 font-inter text-[#696F79]">
            Password
          </label>
          <div className="relative border-[#c2bebe] border-2 rounded h-10 px-1 py-2 text-sm ">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="focus:outline-none w-[95%]"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          <label for="confirmPassword" className="text-sm py-2 font-inter text-[#696F79]">
            Confirm Password
          </label>
          <div className="relative border-[#c2bebe] border-2 rounded h-10 px-1 py-2 text-sm ">
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              className="focus:outline-none w-[95%]"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>
          <button className="rounded font-inter p-2 text-center w-full mt-4 bg-primary text-white">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
