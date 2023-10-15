import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { fetchMovie } from "../services/get-movie";
import { CookieKeys, CookieStorage } from "../utils/cookies";

export const AllMovies = () => {
  const authToken = CookieStorage.get(CookieKeys.AuthToken);
  const baseImg = process.env.REACT_APP_BASEIMAGE_URL;
  const [allMovie, setAllMovie] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const data = await fetchMovie(authToken);
      setAllMovie(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (authToken) {
      getMovies();
    } else {
      navigate("/login");
    }
  }, [authToken]);

  const handleGoToDetails = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };
  return (
    <div className="bg-slate-900">
      <h1 className="font-black text-4xl px-10 py-5 text-red-500 ">
        All Movies
      </h1>
      <div className="flex flex-wrap justify-around">
        {allMovie.map((movie, index) => (
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
      <FooterComponent />
    </div>
  );
};
