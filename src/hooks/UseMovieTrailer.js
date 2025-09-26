import React from 'react';
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
    // The MovieCard component only needs the poster path.
    // Trailer logic and fetching is handled elsewhere.
    if (!posterPath) return null;

    return (
        <div className="w-48 pr-4">
            <img
                alt="movie poster"
                src={IMG_CDN_URL + posterPath}
            />
        </div>
    );
};

export default MovieCard;