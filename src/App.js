import React from 'react';
import './App.css';
import {Movies} from "./MovieProject/Print/Movies";
import {Header} from "./MovieProject/Header/Header";
import {NavBar} from "./MovieProject/NavBar/NavBar";
import {Footer} from "./MovieProject/Footer/Footer";
import {PopularMovies} from "./MovieProject/PopularMovies/PopularMovies";

function App() {
  return (
    <div className={"App"}>
        <NavBar/>
        <Header/>
        <PopularMovies/>
        <h2>Choose genres</h2>
        <Movies/>
        <Footer/>
    </div>
  );
}

export default App;
