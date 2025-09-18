import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideos } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
 const dispatch = useDispatch();

const getMovieVideo = async () => {

 const data = await fetch(
`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, 
API_OPTIONS
 );
const json = await data.json();
 

if (json.results) {
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
     
    dispatch(addTrailerVideos(trailer));
    }
 };

 useEffect(() => {
getMovieVideo();
 }, []);

}
export default useMovieTrailer;