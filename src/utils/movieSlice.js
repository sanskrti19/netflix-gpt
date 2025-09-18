import { createSlice
 } from "@reduxjs/toolkit";

 const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideos: (state,action)=>{
            state.trailerVideo =action.payload;


        }
    }
 })
 export const {addNowPlayingMovie,addTrailerVideos}=movieSlice.actions;

 export default movieSlice.reducer;