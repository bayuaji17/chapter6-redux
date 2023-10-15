import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../api-endpoint";
import http from "../http";
import { CookieKeys, CookieStorage } from "../cookies";

const LoginUser = async (input) => {
  try {
    const result = await http.post(API_ENDPOINT.LOGIN_MOVIE, input);
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const useLoginUser = () => {
  const navigate = useNavigate();

  return useMutation(LoginUser, {
    onSuccess: () => {
      navigate("/");
    },
  });
};

export { LoginUser, useLoginUser };
