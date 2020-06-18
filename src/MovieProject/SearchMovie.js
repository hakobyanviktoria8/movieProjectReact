import React, { useState }from "react";
import PrintMovie from "./PrintMovie";


export default function SearchMovies(props){
    const [input,setInput] = useState("");
    const [movies, setMovies] = useState([]);

    const  searchMovies = async(e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=31769453dd0f9634806aedb81440ed94&language=en-US&query=${input}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();            // console.log(data);
            console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movies Name</label>
                <input className="input"  name="query" value={input} onChange={(e)=>setInput(e.target.value)}
                       type="text" placeholder="Movies name" />
                <button className="button" type="submit">Search movies</button>
            </form>
            <div className="card-list">
                {movies.map(movie => (
                    <PrintMovie movie = {movie} key={movie.id}/>
                ))}
            </div>
        </>
    )
}