import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { fetchMovie } from "../services/get-movie";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { useDispatch, useSelector } from "react-redux";
import { AllMoviesRedux } from "../redux/actions/moviePopularAction";

export const Slider = () => {
  const baseImg = process.env.REACT_APP_BASEIMAGE_URL;
  // const authToken = CookieStorage.get(CookieKeys.AuthToken);
  // const [sliderMovie, setSliderMovie] = useState([]);
  const navigate = useNavigate();
  const dataMoviesSlider = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllMoviesRedux())
  }, [dispatch])
  // const getMovies = async () => {
  //   try {
  //     const data = await fetchMovie(authToken);
  //     setSliderMovie(data.data);
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (authToken) {
  //     getMovies();
  //   } else {
  //     navigate("/login");
  //   }
  // }, [authToken]);

  const handleGoToDetails = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };
  return (
    <>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {dataMoviesSlider?.dataAllMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="mx-10 my-10">
                <img
                  src={`${baseImg}/${movie.poster_path}`}
                  alt="slider"
                  className="rounded-xl hover:cursor-pointer hover:shadow-xl hover:shadow-red-500"
                  onClick={() => handleGoToDetails(movie.id)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
