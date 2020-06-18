import React from "react";
import "./style.css";
import SearchMovies from "./SearchMovie";
//https://api.themoviedb.org/3/movie/550?api_key=31769453dd0f9634806aedb81440ed94
export default function MovieProject(props) {
    return(
        <div className={"container"}>
            <h1 className={"title"}>Movie Project</h1>
            <SearchMovies/>
        </div>
    )
}