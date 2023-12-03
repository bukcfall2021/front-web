import React, { useState } from "react";
import image1 from "./images/chef.png";
import image2 from "./images/rectangle.png";
import api from '../../utils/api';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {BrowserRouter as Link } from "react-router-dom";

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleLogin = async () => {
    e.preventDefault();
    try {
        const [response, error] = await api.post("/login", {
        email,
        password,
      });

      if (error) {
        console.error("Login failed:", error);
      } else {
        console.log("Login successful:", response.data);
      }
    } catch (e) {
      console.error("An unexpected error occurred:", e);

    }
  };

  return (
    <div className="flex overflow-y-hidden">
    <div className="hidden md:block relative h-[100vh] w-[45%] bg-[#39DB4A] overflow-hidden ">
      <img
        src={image2}
        className=" relative sm:top-80 lg:top-52 w-[30rem] lg:w-[40rem] sm:h-[30rem] "
      />
      <img
        className=" absolute  bottom-0 z-10 h-[30rem] lg:h-[40rem]"
        src={image1}
      />
    </div>
    <form className="flex flex-col py-28 " onsubmit={handleLogin}>
    <div className="flex flex-col px-24 xl:px-64  ">
          <div className="font-inter">
            <h1 className="font-extrabold text-2xl">
              Account Login
            </h1>
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
                onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
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
          <input type="checkbox" id="remember" className="checked:accent-[#39DB4A]" />
            <label for="remember" className="text-sm text-[#696F79] "> Remember me</label>
           </div>
            <button className="rounded font-inter p-2 text-center w-full mt-4 bg-[#39DB4A] text-white">Register account</button>
            <p className="text-sm py-3 cursor-pointer">Don't have an account?<Link to="/Signup"> <span className="text-[#39DB4A]"> Sign up here!</span></Link></p>
          </div>
      </form>
      </div>
  )
}

export default Login