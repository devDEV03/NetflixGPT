import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "config",
    initialState : {
        preferredLanguage : "en"
    },
    reducers : {
        changePreferredLanguage : (state,actions) => {
            state.preferredLanguage = actions.payload;
        }
    }
})

export const {changePreferredLanguage} = configSlice.actions;
export default configSlice.reducer;