import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../api-endpoint";
import http from "../http";
import { toast } from "react-toastify";

const LoginUserRedux = async (input) => {
  
  try {
    const result = await http.post(API_ENDPOINT.LOGIN_MOVIE, input);
    return result;
  } catch (error) {
    return toast.error(error.response.data.message);
  }

  
};

const useLoginUser = () => {
  return useMutation(LoginUserRedux);
};

export { LoginUserRedux, useLoginUser };
