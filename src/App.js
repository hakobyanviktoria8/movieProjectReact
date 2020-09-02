import React from 'react';
import './App.css';
import {Movies} from "./MovieProject/Print/Movies";
import {Header} from "./MovieProject/Header/Header";
import {NavBar} from "./MovieProject/NavBar/NavBar";
import PopularMovies from "./MovieProject/PopularMovies/PopularMovies";
// import FlipCart from "./MovieProject/Print/FlipCart/FlipCart";

function App() {
  return (
    <div className={"App"}>
        <NavBar/>
        <Header/>
        <PopularMovies/>
        <h2>Choose genres</h2>
        {/*<FlipCart/>*/}
        <Movies/>

    </div>
  );
}

export default App;
