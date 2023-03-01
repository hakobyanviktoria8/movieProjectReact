import React from "react";
import "./PrintMovie.css";
import popularity from "../img/popularity.svg";
import ModalTrlerComp from "./ModalTrilerComp";

export function Print({ movie }) {
  const IMG_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className={"VoteAverage"}>
            <p>{movie.vote_average} </p>
          </div>
          {movie.backdrop_path && (
            <img
              className={"cartImg"}
              src={IMG_URL + movie.poster_path}
              alt=""
            />
          )}
        </div>
        <div className="flip-card-back">
          <h4>
            {(movie.title ? movie.title : movie.name)
              .split(" ")
              .slice(0, 4)
              .join(" ")}
          </h4>
          <small>
            {movie.overview.length > 140
              ? movie.overview.slice(0, 140).concat("...")
              : movie.overview}
          </small>
          <div className="flip-card-back-data">
            <div className="flip-card-back-left">
              <p>{movie.original_language === "en" ? "English" : "Korean"}</p>
              <b>
                {movie.release_date ? movie.release_date : movie.first_air_date}
              </b>
            </div>
            <div className="flip-card-back-right">
              <img src={popularity} alt="" />
              <small>{movie.popularity.toFixed(2)}</small>
            </div>
          </div>

          <ModalTrlerComp movie={movie} />
        </div>
      </div>
    </div>
  );
}
