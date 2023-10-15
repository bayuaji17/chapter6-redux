import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const fetchMovie = async (authToken) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const { data } = await http.get(`${API_ENDPOINT.ALL_MOVIE}`, config);
    return data;
  } catch (error) {
    throw error;
  }
};

export { fetchMovie };
