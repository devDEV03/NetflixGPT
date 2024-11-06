import { createSlice } from "@reduxjs/toolkit";

const gptSlice  = createSlice({
    name : "gpt",
    initialState : {
        gptSearch : false,
        movieNames : null,
        movieResults : null
    },
    reducers : {
        toggleGptSearchView : (state,actions) => {
            state.gptSearch = !state.gptSearch;
        },
        addGptMovies : (state,actions) => {
        const {movieNames , movieResults} = actions.payload;
        state.movieNames = movieNames;
        state.movieResults = movieResults
        }
    }
})

export const {toggleGptSearchView, addGptMovies} = gptSlice.actions;

export default gptSlice.reducer;