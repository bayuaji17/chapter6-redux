import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchResults : [] 
}

const searchSlice = createSlice({
    name : "searchMovieResults",     
    initialState ,
    reducers :{
        setSearchResult: (state, action) => {
            state.searchResults = action.payload;
          },
    }
})
export const { setSearchResult } = searchSlice.actions;

export default searchSlice.reducer;
