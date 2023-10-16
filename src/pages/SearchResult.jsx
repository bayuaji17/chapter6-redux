import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMovieDataQuery } from "../services/get-search-movie";

export const SearchResult = () => {

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
    if (searchQuery){
      setSearchResult(searchQuery.data);
    }

  };


  useEffect(() => {
    searchData();
  }, [query]);

  const handleGoToDetails = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };


  return (
    <div className="bg-slate-900">
      <h1 className="font-semibold text-4xl text-white px-10 py-4">
        Search result {query}
      </h1>
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

