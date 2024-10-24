import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        upcomingMovies : null,
        topRatedMovies : null,
        trailerKey : ""
    },
    reducers : {
        addNowPlayingMovies : (state,actions) => {
            state.nowPlayingMovies = actions.payload;
        },
        addPopularMovies : (state,actions) => {
            state.popularMovies = actions.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailer : (state,actions) => {
            state.trailerKey = actions.payload;
        },
        addTopRatedMovies : (state,actions) => {
            state.topRatedMovies = actions.payload;
        }
    }
})


export const {addNowPlayingMovies ,addPopularMovies, addUpcomingMovies,addTopRatedMovies, addTrailer} = movieSlice.actions;

export default movieSlice.reducer;