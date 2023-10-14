import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMovieDataQuery } from "../services/get-search-movie";
const baseImgUrl = process.env.REACT_APP_BASEIMAGE_URL;
export const SearchResult = () => {
  const { query } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1);
  // const navigate = useNavigate();

  // const getMovies = async () => {
  //   const data = await fetchMovie();
  //   console.log(data, "ini untuk slider")
  //   setSliderMovie(data.data);
  // };

  const { data: searchQuery } = useMovieDataQuery({
    page: page,
    query: query || "",
  });
  // console.log(searchQuery, "ini hasil search");

  // const searchData = () => {
  //   const data = searchQuery;
  //   console.log(data.data.data, "isi searchdata");
  //   setSearchResult(data.data.data);
  // };
  const searchData = () => {
    setSearchResult(searchQuery.data);
  };

  useEffect(() => {
    searchData();
  }, [query]);

  // const handleGoToDetails = (movie_id) => {
  //   navigate(`/details/${movie_id}`);
  // };
  return (
    <div className="bg-slate-900">
      <h1 className="font-semibold text-4xl text-white px-10 py-4">
        Search result
      </h1>
      <div className="flex flex-wrap justify-around">
        {searchResult &&
          searchResult.map((movie, index) => (
            <div key={index}>
              <h1>{movie.original_title}</h1>
            </div>
          ))}
        {/* {searchResult.map((movie, index) => (
          <div key={index}>
            <div
              // onClick={() => handleGoToDetails(movie.id)}
              className="max-h-full w-10/12 rounded-xl border-2 border-[#be185d] my-10 mx-10 hover:shadow-xl hover:shadow-red-500"
            >
              <img
                src={`${baseImgUrl}/${movie.poster_path}`}
                alt="poster"
                className="h-[35rem] w-full rounded-lg hover:cursor-pointer "
              />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
