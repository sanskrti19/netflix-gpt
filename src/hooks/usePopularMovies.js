// src/hooks/usePopularMovies.js

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/popular?page=1',
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovie(json.results));
    };

    useEffect(() => {
        // Fix the function name here
        getPopularMovies();
    }, []);
};

export default usePopularMovies;