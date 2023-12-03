import React, { useState } from "react";
import ChefImage from "/assets/Auth-Page/chef.png";
import RectangleImage from "/assets/Auth-Page/rectangle.png";
import { IoIosArrowBack } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import RouteNames from "../../../router/RouteNames";
import InputField from "../../../components/InputField";
import AuthPagesSideView from "../../../components/AuthPagesSideView";


const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [confirmPassword,setConfirmPassword]=useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex overflow-y-hidden">
     <AuthPagesSideView />
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
          <InputField
            title={"Full Name"}
            id="name"
            type="text"
            autoFocus={true}
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
         
         
         <InputField
            title={"Email Address"}
            id="email"
            type="text"
            autoFocus={true}
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <InputField
            title={"Password"}
            id="password"
            type={showPassword ? "text" : "password"}
            autoFocus={true}
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rightIcon={
              <button type="button" className="" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            }
          />
          <InputField
            title={"ConfirmPassword"}
            id="Confirmpassword"
            type={showPassword ? "text" : "password"}
            autoFocus={true}
            required={true}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            rightIcon={
              <button type="button" className="" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            }
          />
          <button className="rounded font-inter p-2 text-center w-full mt-4 bg-primary text-white">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
