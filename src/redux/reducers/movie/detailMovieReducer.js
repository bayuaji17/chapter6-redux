import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dataDetailMovies : ""
}

const detailMoviesSlice = createSlice({
    name : "detail",     
    initialState ,
    reducers :{
        setDataDetailMovies: (state, action) => {
            state.dataDetailMovies = action.payload;
          },
    }
})
export const { setDataDetailMovies } = detailMoviesSlice.actions;

export default detailMoviesSlice.reducer;
