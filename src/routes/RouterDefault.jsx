import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepages } from "../pages/Homepages";
import { AllMovies } from "../pages/AllMovies";
import { DetailsMovies } from "../pages/DetailsMovies";
import { SearchResult } from "../pages/SearchResult";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { Protected } from "../components/Protected";
import { MyAccount } from "../pages/MyAccount";

export const RouterDefault = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Homepages />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/allmovies"
          element={
            <Protected>
              <AllMovies />
            </Protected>
          }
        />
        <Route
          path="/details/:id"
          element={
            <Protected>
              <DetailsMovies />
            </Protected>
          }
        />
        c
        <Route
          path="/details/search/:query"
          element={
            <Protected>
              <SearchResult />
            </Protected>
          }
        />
        <Route
          path="/me"
          element={
            <Protected>
              <MyAccount />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
