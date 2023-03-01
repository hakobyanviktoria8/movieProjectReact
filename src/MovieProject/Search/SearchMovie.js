import React, { useState } from "react";
import "./SearchMovie.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import search from "./img/search.png";

export default function SearchMovies(props) {
  //input
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const IMG_URL = "https://image.tmdb.org/t/p/original/";
  const [modal, setModal] = useState(false);

  //togle
  const [togle, setTogle] = useState(true);

  const searchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=31769453dd0f9634806aedb81440ed94&language=en-US&query=${input}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
    setInput("");
  };

  //modal
  const { className } = props;

  const toggle = () => setModal(!modal);

  //toggle
  const handleClick = () => {
    setTogle(!togle);
    document.querySelector(".dBlock").style.display = togle ? "block" : "none";
  };

  return (
    <div className={"container1"}>
      <form className="form" onSubmit={searchMovies}>
        <input
          className="input"
          name="query"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Movies name"
        />
        <button
          disabled={!input}
          className="buttonSearch"
          onClick={toggle}
          type="submit"
        >
          <span>Search</span>
        </button>
        <button
          disabled={!input}
          className="buttonSearchIMG"
          onClick={toggle}
          type="submit"
        >
          <img src={search} alt="" />
        </button>
      </form>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Search movies! Find {movies.length} movies.
        </ModalHeader>

        <ModalBody className="card-list">
          {movies
            .slice(0, 6)
            .map(
              (movie, idx) =>
                movie.poster_path && (
                  <img
                    key={idx}
                    className={"cartImgSearch"}
                    src={IMG_URL + movie.poster_path}
                    alt=""
                  />
                )
            )}
          <div className={"dBlock"}>
            {movies
              .slice(6, 20)
              .map(
                (movie, idx) =>
                  movie.poster_path && (
                    <img
                      key={idx}
                      className={"cartImgSearch"}
                      src={IMG_URL + movie.poster_path}
                      alt=""
                    />
                  )
              )}
          </div>
          <button className={"btnSeeLess"} onClick={handleClick}>
            {togle ? "See more" : "Less"}
          </button>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
