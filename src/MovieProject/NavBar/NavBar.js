import React, { useState, useEffect } from "react";
import "./NavBar.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SearchMovies from "../Search/SearchMovie";
import {Home} from "../Home/Home";
import {Contact} from "../Contact/Contact";
import {Faq} from "../Faq/Faq";

export function NavBar(props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            window.scrollY > 60 ? setShow(true) : setShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    },[]);

    return(
        <Router>
            <div className={`NavBar ${show && "NavBarBG"}`}>
                <Link to="/"><img className={"Logo"} src={require("../Home/img/Logo.svg")} alt=""/></Link>
                <SearchMovies/>
                <Link className={"link linkContact"} to="/contact"><b>Contact</b></Link>
                <Link className={"link"} to="/faq"><b>FAQ</b></Link>
            </div>
            <Switch>
                <Route path="/" exact><Home/></Route>
                <Route path="/movieProjectReact"><Home/></Route>
                <Route path="/contact"><Contact/> </Route>
                <Route path="/faq"> <Faq/></Route>
            </Switch>
        </Router>
    )
}