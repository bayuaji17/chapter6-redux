import React, { useState } from "react";
import FormInput from "./Form/FormInput";

export const Login = ({ setShowLoginPopup, setShowRegisterPopup }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full h-screen flex justify-center absolute items-center px-4 z-40 bg-black bg-opacity-60">
      <div className="w-full md:w-5/12 bg-white p-8 rounded-2xl relative">
        <div
          onClick={() => setShowLoginPopup(false)}
          className="p-1 rounded-full bg-gray-200 text-gray-800 absolute z-50 right-4 top-4 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-3xl text-gray-800 font-semibold">Welcome back!</h1>
        <p className="font-semibold leading-5 text-sm mt-2 text-gray-500">
          Log in and let's explore everything about the world of cinema!
        </p>
        <div className="flex flex-col gap-2 w-full mt-4">
          <FormInput
            label="Username"
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            error={errors.username}
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
          />
          <button className="py-2 px-4 mt-2 font-semibold bg-[#eb0612] rounded-md text-white w-full hover:scale-y-105">
            Log in
          </button>
        </div>
        <div className="flex justify-center items-center w-full mt-3">
          <p className="text-center text-gray-600 font-medium">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setShowLoginPopup(false);
                setShowRegisterPopup(true);
              }}
              className="font-semibold underline text-[#eb0612] cursor-pointer "
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
