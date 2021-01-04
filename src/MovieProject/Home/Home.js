import React from "react";
import {Header} from "./Header/Header";
import {PopularMovies} from "./PopularMovies/PopularMovies";
import {Movies} from "./Print/Movies";

export function Home(props) {
    return(
        <>
            <Header/>
            <PopularMovies/>
            <Movies/>
        </>
    )
}