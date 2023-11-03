import React, { useEffect } from "react";
import { Brand } from "../Brand";
import { Button } from "../Button";
import { Search } from "../Search";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/reducers/auth/authLoginReducer";
import { useGetDataUser } from "../../utils/auth/get_user";
import { setAllDataUser } from "../../redux/reducers/auth/authUserReducer";
export const Navbar = () => {
  // const authMe = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { data: getUser } = useGetDataUser();
  // dispatch(setAllDataUser(getUser));
  const handleLogout = () => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookieKeys.AuthToken, {
      path: "/",
      expires: new Date(0),
    });
    toast.success("Log Out Berhasil!");
    navigate("/login");
  };

  const handleGetUser = () => {
    navigate("/me")
  };

  return (
    <div className="flex flex-row gap-3 relative justify-between mx-3 px-3 my-3 z-10">
      <Brand />
      <Search />
      <Button handleLogout={handleLogout} handleGetUser={handleGetUser} />
    </div>
  );
};
