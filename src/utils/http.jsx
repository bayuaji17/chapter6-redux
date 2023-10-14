import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_APIKEY_TEMPORARY}`,
  },
});
export default http;
