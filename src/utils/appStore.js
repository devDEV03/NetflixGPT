import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice"
import MovieReducer from "./movieSlice"
import TvReducer from "./tvSlice";
import GptReducer from "./gptSlice"
import configReducer from "./configSlice"


const appStore = configureStore({
    reducer : {
        user : UserReducer,
        movies : MovieReducer,
        tv : TvReducer,
        gpt : GptReducer,
        config : configReducer

    }
})

export default appStore;