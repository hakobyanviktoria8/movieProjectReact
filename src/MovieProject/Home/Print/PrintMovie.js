import React,{useState,useEffect} from "react";
import "./PrintMovie.css";
import {Print} from "./Print";

export function PrintMovie({title, url}) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchData  = async() => {
            let response = await fetch(url);
            let data = await response.json();
            setMovies(data.results.sort((a, b) => (a.vote_average > b.vote_average) ? -1 : 1));
        };
        fetchData();
    },[]);
    // console.log(movies);

    return(
        <div className={"section"}>
            <h3>{title}</h3>
            <div className={"rowSection"}>
                {
                    movies.map((movie,idx)=>
                        <Print movie = {movie} url = {url} idx = {idx} key = {idx}/>
                    )
                }
            </div>
        </div>
    )
}
