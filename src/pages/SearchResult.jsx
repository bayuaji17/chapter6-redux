import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMovieDataQuery } from "../services/get-search-movie";
import { Navbar } from "../components/navbar/Navbar";
import { CookieKeys, CookieStorage } from "../utils/cookies";

export const SearchResult = () => {
  const authToken = CookieStorage.get(CookieKeys.AuthToken);
  const { query } = useParams();
  const baseImg = process.env.REACT_APP_BASEIMAGE_URL;
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { data: searchQuery } = useMovieDataQuery({
    page: page,
    query: query || "",
  });

  const searchData = () => {
    if (searchQuery) {
      setSearchResult(searchQuery.data);
    }
  };
  const movePage = (direction) => {
    setPage((prevPage) => {
      const nextPage = prevPage + direction;
      return nextPage >= 1 ? nextPage : prevPage;
    });
  };

  useEffect(() => {
    if (authToken) {
      searchData();
    } else
    navigate("/login") 
  });
  const handleGoToDetails = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };

  return (
    <div className="bg-slate-900">
      <div className="absolute top-0 right-0 left-0">
        <Navbar />
      </div>
      <h1 className="font-semibold text-4xl text-white px-10 pt-20 pb-5">
        Search result "{query}"
      </h1>
      <div className="flex justify-end mr-16 gap-4">
        <button
          onClick={() => movePage(-1)}
          className="flex h-8 items-center justify-center rounded-2xl bg-red-600 text-sm font-medium text-white w-20 hover:bg-red-800"
        >
          Previous
        </button>
        <button
          onClick={() => movePage(1)}
          className="flex h-8 items-center justify-center rounded-2xl bg-red-600 text-sm font-medium text-white w-20 hover:bg-red-800"
        >
          Next
        </button>
      </div>

      <div className="flex flex-wrap justify-around">
        {searchQuery?.data &&
          searchQuery.data.map((movie, index) => (
            <div key={index}>
              <div className="max-h-full w-12/12 rounded-xl border-4 border-[#be185d] my-10 mx-10 hover:shadow-xl hover:shadow-red-500">
                <div className="">
                  <img
                    src={`${baseImg}/${movie.poster_path}`}
                    alt=""
                    className="h-[35rem] w-full rounded-lg object-cover hover:cursor-pointer"
                    onClick={() => handleGoToDetails(movie.id)}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
