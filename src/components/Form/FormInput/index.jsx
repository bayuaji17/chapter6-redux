import React from "react";

const FormInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  name,
}) => {
  return (
    <div>
      <label
        className="block text-gray-800 text-base font-semibold mb-1"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={`border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline focus:border-[#eb0612] focus:outline-none placeholder:text-sm placeholder:italic ${
          error ? "border-red-500" : ""
        }`}
        id={label}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default FormInput;
