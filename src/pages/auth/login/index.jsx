import React, { useState } from "react";
import ChefImage from "/assets/Auth-Page/chef.png";
import RectangleImage from "/assets/Auth-Page/rectangle.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import RouteNames from "../../../router/RouteNames";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
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
      <form className="flex flex-col py-28 " onsubmit={handleLogin}>
        <div className="flex flex-col px-24 xl:px-64  ">
          <div className="font-inter">
            <h1 className="font-extrabold text-2xl">Account Login</h1>
            <p className="text-sm leading-5 py-4">Become a member and enjoy exclusive deals and discounts.</p>
          </div>

          <label for="email" className="text-sm py-2 font-inter text-[#696F79]">
            Email Address
          </label>
          <input
            autoFocus
            id="email"
            type="text"
            className=" border-[#c2bebe] border-2 rounded h-10 p-1 focus:outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-sm py-2 font-inter text-[#696F79]">
            Password
          </label>
          <div className="text-sm relative border-[#c2bebe] border-2 rounded h-10 px-1 py-2 ">
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
          <div className="flex gap-2 pt-3">
            <input type="checkbox" id="remember" className="checked:accent-primary" />
            <label for="remember" className="text-sm text-[#696F79] ">
              {" "}
              Remember me
            </label>
          </div>
          <button className="rounded font-inter p-2 text-center w-full mt-4 bg-primary text-white">
            Register account
          </button>
          <p className="text-sm py-3 cursor-pointer">
            Don't have an account?
            <Link to={RouteNames.SIGN_UP}>
              {" "}
              <span className="text-primary"> Sign up here!</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
