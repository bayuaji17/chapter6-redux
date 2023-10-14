import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const fetchMovie = async () => {
  const { data } = await http.get(`${API_ENDPOINT.ALL_MOVIE}`);
//   console.log(data,"ini isinya")
  return data;
};

export { fetchMovie };
