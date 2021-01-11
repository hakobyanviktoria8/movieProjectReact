import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import YouTubeComp from "./YouTubeComp";
import movieTrailer from "movie-trailer";

const ModalTrlerComp = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [trailerUrl,setTrailerUrl] = useState("");

    const handleClick = (movie)=> {
        setModal(!modal);

        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            //movieTrailer give name return url
            //https://www.npmjs.com/package/movie-trailer
            movieTrailer(movie.title ? movie.title : movie.name)
                .then(url => {
                    //last unique word or v="value"
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error)=>console.log(error))
        }
    };
    // console.log(props.movie);

    return (
        <div>
            <button style={{backgroundColor: "#550037", margin: 0}} onClick={()=>handleClick(props.movie)}>
                <img src={require("../img/play.svg")} alt=""/>
                Movie trailer
            </button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{props.movie.title ? props.movie.title : props.movie.name}</ModalHeader>
                <ModalBody>

                    <YouTubeComp videoId = {trailerUrl}/>

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalTrlerComp;