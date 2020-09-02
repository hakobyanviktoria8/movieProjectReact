import React, { useState } from "react";
import "./SearchMovie.css";

export default function SearchMovies(props){
    const [input,setInput] = useState("");
    const [movies, setMovies] = useState([]);

    const  searchMovies = async(e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=31769453dd0f9634806aedb81440ed94&language=en-US&query=${input}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <div className={"container"}>
            <form className="form" onSubmit={searchMovies}>
                <input className="input"
                       name="query"
                       value={input}
                       onChange={(e)=>setInput(e.target.value)}
                       type="text"
                       placeholder="Movies name"
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.map(movie => (
                    <div className={"card"}>
                        <img className={"cardImg"} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=""/>
                        <h2>{movie.original_title}</h2>
                        <small>{movie.overview}</small>
                        <p>Release date: {movie.release_date}</p>
                        <p>Vote: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}