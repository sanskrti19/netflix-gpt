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
        addPopularMovie:(state,action)=>{
            state.popularMovies=action.payload;
        },
         addTopRatedMovie:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addTrailerVideos: (state,action)=>{
            state.trailerVideo =action.payload;
        },
        addUpcomingMovie:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
    }
 })
 export const {addNowPlayingMovie,addTrailerVideos,addPopularMovie,addTopRatedMovie,addUpcomingMovie}=movieSlice.actions;

 export default movieSlice.reducer;