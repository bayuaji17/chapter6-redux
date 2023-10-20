import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const fetchMovie = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useMovieDataQuery = (options) => {
  return useQuery([API_ENDPOINT.SEARCH_MOVIE, options], fetchMovie);
};

export { fetchMovie, useMovieDataQuery };
