import React, { useState, useEffect } from "react";
import "./NavBar.css";
import SearchMovies from "../Search/SearchMovie";

export function NavBar(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            window.scrollY > 100 ? setShow(true) : setShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    },[]);

    return(
        <div className={`NavBar ${show && "NavBarBG"}`}>
            <div>
                <img className={"Logo"} src={require("../img/Logo.svg")} alt=""/>
            </div>
            <SearchMovies/>
        </div>
    )
}