import React, {useState} from "react";
import "./Movies.css";
import {PrintMovie} from "./PrintMovie";

export function Movies(props) {
    const [show,setShow] = useState(false);

    const API_URl = 'https://api.themoviedb.org/3';
    const  API_KEY = '31769453dd0f9634806aedb81440ed94';

    const  request = [
        {title: "Trending", url:`${API_URl}/trending/all/week?api_key=${API_KEY}&language=en-US`},
        {title: "Top Rated", url:`${API_URl}/movie/top_rated?api_key=${API_KEY}&language=en-US`},
        {title: "Action Movies", url:`${API_URl}/discover/movie/?api_key=${API_KEY}&with_genres=28&append_to_response=videos`},
        {title: "Comedy Movies", url:`${API_URl}/discover/movie/?api_key=${API_KEY}&with_genres=35&append_to_response=videos`},
        {title: "Romance Movies", url:`${API_URl}/discover/movie/?api_key=${API_KEY}&with_genres=10749&append_to_response=videos`},
        {title: "Horror Movies", url:`${API_URl}/discover/movie/?api_key=${API_KEY}&with_genres=27&append_to_response=videos`},
        {title: "Mystery", url:`${API_URl}/discover/movie/?api_key=${API_KEY}&with_genres=9648&append_to_response=videos`},
        {title: "Scifi", url:`${API_URl}/discover/movie/?api_key=${API_KEY}&with_genres=878&append_to_response=videos`},
        {title: "Western", url:`${API_URl}/discover/movie/?api_key=${API_KEY}&with_genres=37&append_to_response=videos`},
        {title: "Animation", url:`${API_URl}/discover/movie/?api_key=${API_KEY}&with_genres=16&append_to_response=videos`},
    ];

    //div display block or none
    const toggle =(e)=>{
        setShow(!show);
        let val= e.target.value +"";
        let div= document.getElementById(val);
        div.classList.toggle("hide");
    };

    return(
        <div className={"Movies"}>
            <h2>Choose genres</h2>
            <div className={"MoviesBtns"}>
                {
                    request.map((req,idx)=>
                        <button key={idx} value={req.title.split(" ").join("")}
                                 onClick={(event)=>{
                                     toggle(event);
                                     event.target.classList.toggle("active");
                                 }}
                        >{req.title}</button>
                    )
                }
            </div>
            {
                request.map((req,idx)=>
                    <div key={idx} id={req.title.split(" ").join("")} className={"hide"}>
                        <PrintMovie title={req.title} url={req.url}/>
                    </div>
                )
            }
        </div>
    )
}
