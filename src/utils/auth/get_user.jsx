import http from "../http";
import { API_ENDPOINT } from "../api-endpoint";


export const fetchUserRedux = async () => {
  return await http.get(API_ENDPOINT.GET_USER);
};
