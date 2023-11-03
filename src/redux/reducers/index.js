import { combineReducers } from "@reduxjs/toolkit";
import movieSlice from "./movie/moviePopularReducer"
import authLoginSlice from "./auth/authLoginReducer";
import searchSlice from "./movie/searchResultReducer";
import detailMoviesSlice from "./movie/detailMovieReducer";
import authUserSlice from "./auth/authUserReducer";
export default combineReducers({
  authLogin: authLoginSlice,
  movies: movieSlice,
  search: searchSlice,
  detail: detailMoviesSlice,
  authUser: authUserSlice
});
