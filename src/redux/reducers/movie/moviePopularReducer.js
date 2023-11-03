import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dataAllMovies : [] 
}

const MovieSlice = createSlice({
    name : "allMovies",     
    initialState ,
    reducers :{
        setDataAllMovies: (state, action) => {
            state.dataAllMovies = action.payload;
          },
    }
})
export const { setDataAllMovies } = MovieSlice.actions;

export default MovieSlice.reducer;
