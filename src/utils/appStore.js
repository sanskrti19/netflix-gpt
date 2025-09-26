// appStore.js (Cleaned)
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import gptReducer from "./gptSlice" // Keep this one
import moviesReducer from "./movieSlice"
// import gptSlice from "./gptSlice"; // <--- Remove this redundant line

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer // This is the correct configuration!
        }
    }
)
export default appStore;