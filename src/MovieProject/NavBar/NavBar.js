import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import SearchMovies from "../Search/SearchMovie";
import logo from "../Home/img/Logo.svg";

export function NavBar(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setShow(true) : setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`NavBar ${show && "NavBarBG"}`}>
      <Link to="/">
        <img className={"Logo"} src={logo} alt="" />
      </Link>
      <SearchMovies />
      <Link className={"link linkContact"} to="/contact">
        <b>Contact</b>
      </Link>
      <Link className={"link"} to="/faq">
        <b>FAQ</b>
      </Link>
    </div>
  );
}
