import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice"
import MovieReducer from "./movieSlice"
import TvReducer from "./tvSlice";

const appStore = configureStore({
    reducer : {
        user : UserReducer,
        movies : MovieReducer,
        tv : TvReducer
    }
})

export default appStore;