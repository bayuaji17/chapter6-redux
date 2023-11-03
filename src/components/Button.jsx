import React from "react";

export const Button = ({ handleLogout, handleGetUser }) => {
  return (
    <div className="flex gap-5">
      <button
        onClick={() => handleGetUser()}
        className="w-32 h-10 rounded-full border-2 border-red-600 bg-red-600 text-white"
      >
        My Account
      </button>
      <button
        onClick={() => handleLogout()}
        className="w-32 h-10 rounded-full border-2 border-red-600 bg-red-600 text-white"
      >
        Logout
      </button>
    </div>
  );
};
