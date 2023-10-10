import React from "react";

export const Button = ({ setShowLoginPopup, setShowRegisterPopup }) => {
  return (
    <div className="flex gap-5">
      <button
        onClick={() => {
          setShowLoginPopup(true);
          setShowRegisterPopup(false);
        }}
        className=" w-32 h-10 rounded-full border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600"
      >
        Login
      </button>
      <button
        onClick={() => {
          setShowLoginPopup(false);
          setShowRegisterPopup(true);
        }}
        className="w-32 h-10 rounded-full border-2 border-red-600 bg-red-600 text-white"
      >
        Register
      </button>
    </div>
  );
};
