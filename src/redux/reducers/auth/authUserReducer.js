import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";

const initialState = {
    token: CookieStorage.get(CookieKeys.AuthToken) || undefined,
    // nameUser: "",
    // emailUser: "",
    allDataUser: [],
};

const authUserSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setAllDataUser: (state, action) => {
            state.allDataUser = action.payload;
        },
    },
});

export const { setTokenUser, setAllDataUser } = authUserSlice.actions;

export default authUserSlice.reducer;
