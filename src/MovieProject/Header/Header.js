import React, {useState, useEffect} from "react";
import "./Header.css";

export function Header(props) {
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=31769453dd0f9634806aedb81440ed94&language=en-US";
    const [movies, setMovies] = useState([]);
    const IMG_URL = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        const fetchData  = async() => {
            let response = await fetch(url);
            let data = await response.json();
            setMovies(data.results[0]);
            // setMovies(data.results[Math.floor(data.results.length*Math.random())]);
            // console.log(Math.floor(data.results.length*Math.random()))
        };
        fetchData();
    },[]);

    return(
        <div className={"Header"}>
            {movies.backdrop_path && <img className={"headerbgimg"} src={IMG_URL + movies.backdrop_path} alt=""/>}

            <div className={"HeaderTextLeft"}>
                <h1 className={"headerTitle"}>{movies.title?.length > 30 ?  movies.title.substr(0,30) +"..." : movies.title}</h1>
                <p className={"headerParagraph"}>{movies.overview?.length > 170 ?  movies.overview.substr(0,170) +"..." : movies.overview}</p>
            </div>
            <div className={"HeaderTextRight"}>
                <p className={"headerLanguage"}>{movies.original_language ==="en" ? "English" : "Russian"}</p>
                <h4 className={"headerDate"}>{movies.release_date}</h4>
                <div className={"HeaderVote"}>
                    <img src={require("../img/Star1.svg")} alt=""/>
                    <img src={require("../img/Star1.svg")} alt=""/>
                    <img src={require("../img/Star1.svg")} alt=""/>
                    <img src={require("../img/Star1.svg")} alt=""/>
                    <img src={require("../img/Star0.svg")} alt=""/>
                </div>
            </div>


        </div>
    )
}