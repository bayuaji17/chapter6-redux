import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AllMoviesRedux } from "../redux/actions/moviePopularAction";

export const AllMovies = () => {

  const baseImg = process.env.REACT_APP_BASEIMAGE_URL;

  const dataMovies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(AllMoviesRedux())
  }, [dispatch])
  
  

  const handleGoToDetails = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };
  return (
    <div className="bg-slate-900">
      <div className="absolute top-0 right-0 left-0">
        <Navbar />
      </div>
      <h1 className="font-black text-4xl px-10 pt-20 pb-5 text-red-500 ">
        All Movies
      </h1>
      <div className="flex flex-wrap justify-around">
        {dataMovies?.dataAllMovies?.map((movie, index) => (
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
