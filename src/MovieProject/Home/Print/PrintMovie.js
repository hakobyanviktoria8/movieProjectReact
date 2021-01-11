import React,{useState,useEffect} from "react";
import "./PrintMovie.css";
import axios from "axios";
import {Print} from "./Print";

export function PrintMovie({title, url}) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchData  = async() => {
            let req = await axios.get(url);
            setMovies(req.data.results.sort((a, b) => (a.vote_average > b.vote_average) ? -1 : 1));
            return req;
        };
        fetchData();
    },[url]);
    // console.log(movies);

    return(
        <div className={"section"}>
            <h3>{title}</h3>
            <div className={"rowSection"}>
                {
                    movies.map((movie,idx)=>
                        <Print movie = {movie} key = {idx}/>
                    )
                }
            </div>
        </div>
    )
}
