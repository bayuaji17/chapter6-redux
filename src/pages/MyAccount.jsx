import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getUser } from "../redux/actions/authUserAction";
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
    <div>
        <Navbar/>
      <p>
    {authMeUsers.name}
    {authMeUsers.email}
      </p>
    </div>
  );
};
