import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name : "tv",
    initialState : {
        airingToday : null
    },
    reducers : {
        addAiringToday : (state,actions) => {
            state.airingToday = actions.payload;
        }
    }
})

export const {addAiringToday} = tvSlice.actions;
export default tvSlice.reducer;