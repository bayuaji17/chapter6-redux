import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions/authUserAction";
import { Navbar } from "../components/navbar/Navbar";

export const MyAccount = () => {
  const dispatch = useDispatch();
  const authMeUsers = useSelector((state) => state.authUser.allDataUser);

  const dataUser = () => {
    dispatch(getUser());
  };
  useEffect(() => {
    dataUser();
  }, []);

  return (
    <div className="">
      <Navbar />

      <div className="h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fixed top-0 left-0 right-0 flex justify-center items-center">
        <div className="w-3/12 h-4/12 rounded-xl border-2 border-white flex flex-col justify-center items-center shadow-2xl shadow-violet-800">
          <img
            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&q=80&w=1966&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
            className="rounded-full w-40 h-40 object-cover my-10"
          />
          <h1 className="text-white text-lg">Username : {authMeUsers.name}</h1>
          <h1 className="text-white mb-6 text-lg">Email : {authMeUsers.email}</h1>
        </div>
      </div>
    </div>
  );
};
