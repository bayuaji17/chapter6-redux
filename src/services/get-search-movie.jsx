import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

// const fetchMovie = async (page, query) => {
//   const { data } = await http.get(
//     `${API_ENDPOINT.SEARCH_MOVIE}?page=${page ? page : 1}&query=${query}`
//   );
//   //   console.log(data,"ini isinya")
//   return data;
// };
const fetchMovie = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useMovieDataQuery = (options) => {
  return useQuery([API_ENDPOINT.SEARCH_MOVIE, options], fetchMovie);
};
// const useMovieDataQuery = (page, query) => {
//   return useQuery(["userData", page, query], fetchMovie(page, query));
// };

export { fetchMovie, useMovieDataQuery };
