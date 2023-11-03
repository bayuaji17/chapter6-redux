import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";

const initialState = {
  token: CookieStorage.get(CookieKeys.AuthToken) || undefined,
};

const authLoginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state = { ...state , isLogin : action.payload}
    },
  },
});

export const { setToken } = authLoginSlice.actions;

export default authLoginSlice.reducer;
