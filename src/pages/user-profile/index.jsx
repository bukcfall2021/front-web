import React from "react";
import InputField from "../../components/InputField";
import { MdOutlineInsertPhoto } from "react-icons/md";

const UserProfilePage = () => {
  return (
    <div>
      <div
        className="w-[140px] rounded text-slate-600 border-slate-400 border-[2px] border-dashed mb-5 flex flex-col items-center justify-center"
        style={{
          aspectRatio: "3.8/4",
        }}
      >
        <MdOutlineInsertPhoto className="text-3xl" />
        <p className="text-sm">Upload you image</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 mb-2">
        <InputField title={"Full name"} placeholder={"Enter your full name"} />
        <InputField title={"Email"} placeholder={"Enter your email"} />
        <InputField title={"User name"} placeholder={"Enter your username"} />
        <InputField title={"Phone number"} placeholder={"Enter your phone number"} />
      </div>

      <label for="email" className="text-sm py-2  font-inter text-[#696F79]">
        Address
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none"
        placeholder="Plot no, block, karachi"
      ></textarea>
    </div>
  );
};

export default UserProfilePage;
