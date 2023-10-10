import React, { useState } from "react";
import { Details } from "../components/Details";
import { Navbar } from "../components/navbar/Navbar";
import { TrailerProvider } from "../api/TrailerContext";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export const DetailsMovies = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  return (
    <div>
      {showLoginPopup && (
        <>
          <Login
            setShowLoginPopup={setShowLoginPopup}
            setShowRegisterPopup={setShowRegisterPopup}
          />
        </>
      )}
      {showRegisterPopup && (
        <>
          <Register
            setShowLoginPopup={setShowLoginPopup}
            setShowRegisterPopup={setShowRegisterPopup}
          />
        </>
      )}
      <div className="absolute top-0 right-0 bottom-0 left-0 z-20">
        <Navbar
          setShowLoginPopup={setShowLoginPopup}
          setShowRegisterPopup={setShowRegisterPopup}
        />
      </div>
      <TrailerProvider>
        <Details />
      </TrailerProvider>
    </div>
  );
};
