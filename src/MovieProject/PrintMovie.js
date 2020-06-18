import React from "react";
export default function PrintMovie({movie}) {
    return(
        <div className={"card"}>
            <img className={"cardImg"} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=""/>
            <h2>{movie.original_title}</h2>
            <small>{movie.overview}</small>
            <p>Release date: {movie.release_date}</p>
            <p>Vote: {movie.vote_average}</p>
        </div>
    )
}