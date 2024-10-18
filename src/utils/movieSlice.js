import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerKey : ""
    },
    reducers : {
        addNowPlayingMovies : (state,actions) => {
            state.nowPlayingMovies = actions.payload;
        },
        addTrailer : (state,actions) => {
            state.trailerKey = actions.payload;
        }
    }
})


export const {addNowPlayingMovies , addTrailer} = movieSlice.actions;

export default movieSlice.reducer;