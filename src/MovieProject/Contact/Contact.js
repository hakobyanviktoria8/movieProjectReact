import React from "react";
import "./Contact.css";
import AppContact from "./AppContact";
import {PerContactMap} from "./PerContactMap";
// import { useRouteMatch } from 'react-router-dom';

export function Contact(props) {
    // let route  = useRouteMatch();
    //
    // route.path === "/contact" || route.path === "/faq" ?
    //     document.querySelector('.NavBar').style.background="#52143780"
    // :
    //     document.querySelector('.NavBar').style.background="#52143700";

    //document.querySelectorAll('.link').forEach(x=>x.style.color="#52143780")

    return(
        <div className={"Contact"}>
            <h2>Contact me</h2>
            <AppContact/>
            <h2>Follow me</h2>
            <div className={"followIcon"}>
                <img src={require("./img/sircle.png")} alt=""/>
                <a href="https://www.linkedin.com/in/viktorya-hakobyan-8a6128199/"><img src={require("./img/linkedin.png")} alt=""/></a>
                <a href="https://github.com/hakobyanviktoria8"><img src={require("./img/github.png")} alt=""/></a>
                <a href="https://edabit.com/user/3aZvfgr2H2WF8Yog2"><img src={require("./img/edabit.png")} alt=""/></a>
                <a href="https://www.facebook.com/viktorya.hakobyan"><img src={require("./img/facebook.png")} alt=""/></a>
                <img src={require("./img/sircle.png")} alt=""/>
            </div>

            <PerContactMap/>
        </div>
    )
}