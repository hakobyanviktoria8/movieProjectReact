import React, { useState } from "react";
import "./SearchMovie.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function SearchMovies(props){
    //input
    const [input,setInput] = useState("");
    const [movies, setMovies] = useState([]);
    const IMG_URL = "https://image.tmdb.org/t/p/original/";
    const [modal, setModal] = useState(false);
    const  searchMovies = async(e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=31769453dd0f9634806aedb81440ed94&language=en-US&query=${input}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            console.error(err)
        }
        setInput("")
    };

    //modal
    const {
        buttonLabel,
        className
    } = props;

    const toggle = () => setModal(!modal);

    return (
        <div className={"container1"}>
            <form className="form" onSubmit={searchMovies}>
                <input className="input"
                       name="query"
                       value={input}
                       onChange={(e)=>setInput(e.target.value)}
                       type="text"
                       placeholder="Movies name"
                />
                <button disabled={!input} className="buttonSearch" onClick={toggle} type="submit">Search</button>
            </form>

            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Search movies!</ModalHeader>
                <ModalBody className="card-list">
                    {movies.map((movie,idx) =>
                        movie.poster_path && <img key={idx} className={"cartImgSearch"} src={IMG_URL + movie.poster_path} alt=""/>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}




//{movies.map(movie => (
//                     <div className={"card"}>
//                         <img className={"cardImg"} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=""/>
//                         <h2>{movie.original_title}</h2>
//                         <small>{movie.overview}</small>
//                         <p>Release date: {movie.release_date}</p>
//                         <p>Vote: {movie.vote_average}</p>
//                     </div>
//                 ))}