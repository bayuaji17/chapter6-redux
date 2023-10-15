import { useMutation } from "@tanstack/react-query";
import http from "../http";
import { API_ENDPOINT } from "../api-endpoint";

const RegisterUser = async (input) => {
  const { data } = await http.post(API_ENDPOINT.REGISTER_MOVIE, input);
  return data;
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
};

export { RegisterUser, useCreateUser };
