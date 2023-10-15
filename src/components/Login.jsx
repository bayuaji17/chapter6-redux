import React, { useState } from "react";
import FormInput from "./Form/FormInput";
import { Link } from "react-router-dom";
import { useLoginUser } from "../utils/auth/login_user";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const { mutate: loginUser } = useLoginUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginUser = () => {
    loginUser({
      email: formData.email,
      password: formData.password,
    });
  };

  const background =
    "https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/89b3a194-7a5a-4509-95ed-9326d4687134/ID-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg";

  return (
    <div
      className="w-full relative bg-center bg-cover bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      <div className="w-full h-screen flex justify-center absolute items-center px-4">
        <div className="w-full md:w-5/12 p-8 rounded-2xl relative bg-black bg-opacity-70">
          <h1 className="text-3xl text-gray-200 font-semibold">
            Welcome back!
          </h1>
          <p className="font-semibold leading-5 text-sm mt-2 text-gray-200">
            Log in and let's explore everything about the world of cinema!
          </p>
          <div className="flex flex-col gap-2 w-full mt-4">
            <FormInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
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
            <button
              onClick={() => handleLoginUser()}
              className="py-2 px-4 mt-2 font-semibold bg-[#eb0612] rounded-md text-white w-full hover:scale-y-105"
            >
              Log in
            </button>
          </div>
          <div className="flex justify-center items-center w-full mt-3">
            <p className="text-center text-gray-200 font-medium">
              Don't have an account?
              <span className="font-semibold underline text-[#eb0612] cursor-pointer ">
                <Link to={"/register"}> Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
