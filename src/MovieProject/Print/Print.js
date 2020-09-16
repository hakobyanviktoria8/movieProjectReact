import React, {useState} from "react";
import "./PrintMovie.css";

import ModalTrlerComp from "./ModalTrilerComp";

export function Print({movie, url, idx}) {
    const IMG_URL = "https://image.tmdb.org/t/p/original/";

    return(
        <div  key={idx} className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className={"VoteAverage"}>
                        <p>{movie.vote_average} </p>
                    </div>
                    <img  className={"cartImg"} src={IMG_URL + movie.poster_path} alt=""/>
                </div>
                <div className="flip-card-back">
                    <h4>{(movie.title ? movie.title : movie.name).split(" ").slice(0,4).join(" ")}</h4>
                    <small>{movie.overview.length > 140 ?
                        movie.overview.slice(0,140).concat("..."): movie.overview}
                        {/*movie.overview.split(" ").slice(0,20).join(" ").concat("...")*/}
                    </small>
                    <div className="flip-card-back-data">
                        <div className="flip-card-back-left">
                            <p>{movie.original_language === "en" ? "English" : "Korean"}</p>
                            <b>{movie.release_date ? movie.release_date : movie.first_air_date}</b>
                        </div>
                        <div  className="flip-card-back-right">
                            <img src={require("../img/popularity.svg")} alt=""/>
                            <small>{movie.popularity.toFixed(2)}</small>
                        </div>
                    </div>

                    <ModalTrlerComp  movie = {movie}/>

                </div>
            </div>
        </div>
    )
}