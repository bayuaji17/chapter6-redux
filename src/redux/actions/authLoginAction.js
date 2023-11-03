import { toast } from "react-toastify";
import { LoginUserRedux } from "../../utils/auth/login_user";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setToken } from "../reducers/auth/authLoginReducer";

export const LoginUser = (input) => (dispatch) => {

    LoginUserRedux(input).then((result) => {
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
        dispatch(setToken(result.data.data.token));
        window.location.href = "/";
        toast.success("Anda Berhasil Login || HAPPY WATCHING");
        
    }).catch((err) => {
        toast.error("Sesi anda telah berakhir ! Silahkan login kembali")
    })

}

export const LogOut = (input) => (dispatch) => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookieKeys.AuthToken)

}
