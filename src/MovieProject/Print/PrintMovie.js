import React,{useState,useEffect} from "react";
import "./PrintMovie.css";

export function PrintMovie({title, url}) {
    const IMG_URL = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchData  = async() => {
            let response = await fetch(url);
            let data = await response.json();
            setMovies(data.results);
        };
        fetchData();
    },[]);
    console.log(movies);

    return(
        <div className={"section"}>
            <h3>{title}</h3>
            <div className={"rowSection"}>
                {
                    movies.map((movie,idx)=>
                        <div  className={"rowSection_div"}>
                            <div className={"VoteAverage"}>
                                <p>{movie.vote_average} </p>
                            </div>
                            <img key={idx} className={"cartImg"} src={IMG_URL + movie.poster_path} alt=""/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
