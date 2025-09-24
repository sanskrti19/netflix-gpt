
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
 import { addMovieTrailer } from "../utils/movieSlice"; 
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        if (!movieId) return;

        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
        if (json.results) {
            const trailer = json.results.find(video => video.type === "Trailer") || json.results[0];
             dispatch(addMovieTrailer({ movieId, trailer })); 
        }
    };

    useEffect(() => {
        getMovieVideo();
    }, [movieId]);
};

export default useMovieTrailer;