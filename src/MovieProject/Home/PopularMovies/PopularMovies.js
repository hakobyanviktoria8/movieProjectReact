import React, { useState, useEffect } from "react";
import "./PopularMovies.css";
import SwiperComp from "./SwiperComp/SwiperComp";

export function PopularMovies(props) {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=31769453dd0f9634806aedb81440ed94&language=en-US";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url);
      let data = await response.json();
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div className={"popular"}>
      <h2>Popular movies</h2>
      <SwiperComp movies={movies} />
    </div>
  );
}
