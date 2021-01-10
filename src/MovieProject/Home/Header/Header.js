import React, {useState, useEffect} from "react";
import "./Header.css";

export function Header(props) {
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=31769453dd0f9634806aedb81440ed94&language=en-US";
    const [movies, setMovies] = useState([]);
    const [loading, setLoading]=useState(false);
    const IMG_URL = "https://image.tmdb.org/t/p/original/";

    //print stars vote average
    const starNum = Math.ceil(movies.vote_average/2);
    const stars = [];
    for (let i=0;i<starNum;i++){
        stars.push(i)
    }

    useEffect(()=>{
        setLoading(true);
        const fetchData  = async() => {
            let response = await fetch(url);
            let data = await response.json();
            setMovies(data.results[1]);
            setLoading(false)
        };
        fetchData();
    },[]);

    return(
        loading?
        <div className={"loading"}>
            <img src={require("../img/loading.gif")} alt=""/>
        </div>
        :
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
                    {stars.map(i =>
                        <img key = {i} src={require("../img/Star1.svg")} alt=""/>
                    )}
                </div>
            </div>
        </div>
    )
}