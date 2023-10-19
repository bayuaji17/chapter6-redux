import React from "react";
import { Brand } from "../Brand";
import { Button } from "../Button";
import { Search } from "../Search";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from "react-toastify";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken, {
      path: "/",
      expires: new Date(0),
    });
    toast.success("Log Out Berhasil!");
    navigate("/login");
  };

  return (
    <div className="flex flex-row gap-3 relative justify-between mx-3 px-3 my-3 z-10">
      <Brand />
      <Search />
      <Button handleLogout={handleLogout} />
    </div>
  );
};
