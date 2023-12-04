import React from "react";

const InputField = ({
  id,
  type,
  required,
  value,
  title,
  onChange = () => {},
  rightIcon = <></>,
  autoFocus,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label for="email" className="text-sm py-2 font-inter text-[#696F79]">
        {title}
      </label>
      <div className="text-sm border-slate-300 border-[1px] rounded px-2  py-3 pl-3 flex items-center w-full">
        <input
          id={id}
          type={type}
          className="focus:outline-none w-full"
          required={required}
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
        />
        {rightIcon}
      </div>
    </div>
  );
};

export default InputField;
