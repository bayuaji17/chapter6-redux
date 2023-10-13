import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepages } from "../pages/Homepages";
import { AllMovies } from "../pages/AllMovies";
import { DetailsMovies } from "../pages/DetailsMovies";
import { SearchResult } from "../pages/SearchResult";
import { Login } from "../components/Login";
import { Register } from "../components/Register";

export const RouterDefault = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allmovies" element={<AllMovies />} />
        <Route path="/details/:id" element={<DetailsMovies />} />
        <Route path="/details/search/:query" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};
