import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { fetchMovie } from "../services/get-movie";
import { useNavigate } from "react-router-dom";
const baseImg = process.env.REACT_APP_BASEIMAGE_URL;
export const Slider = () => {
  const [sliderMovie, setSliderMovie] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    const data = await fetchMovie();
    console.log(data, "ini untuk slider")
    setSliderMovie(data.data);
  };

  useEffect(() => {
    getMovies()
  }, []);
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
          {sliderMovie.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="mx-10 my-10">
                <img
                  src={`${baseImg}/${movie.poster_path}`}
                  alt=""
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
