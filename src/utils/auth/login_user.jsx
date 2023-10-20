import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../api-endpoint";
import http from "../http";
import { CookieKeys, CookieStorage } from "../cookies";
import { toast } from "react-toastify";

const LoginUser = async (input) => {
  try {
    const result = await http.post(API_ENDPOINT.LOGIN_MOVIE, input);
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    return result && toast.success("Login Success");
  } catch (error) {
<<<<<<< HEAD
    return toast.error(error.response.data.message);
=======
    return toast.error("Email / Password yang anda input salah !")
>>>>>>> c4727d3c5a7ef5f98c8e4c8729e2e8e90533798f
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
