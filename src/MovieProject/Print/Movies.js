import React,{useState, useEffect} from "react";
import "./Movies.css";
import {PrintMovie} from "./PrintMovie";

export function Movies(props) {
    const API_URl = 'https://api.themoviedb.org/3';
    const  API_KEY = '31769453dd0f9634806aedb81440ed94';

    const  request = [
        {title: "Trending", url:`/trending/all/week?api_key=${API_KEY}&language=en-US`},
        {title: "Top Rated", url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`},
        {title: "Action Movies", url:`/discover/movie/?api_key=${API_KEY}&with_genres=28&append_to_response=videos`},
        {title: "Comedy Movies", url:`/discover/movie/?api_key=${API_KEY}&with_genres=35&append_to_response=videos`},
        {title: "Romance Movies", url:`/discover/movie/?api_key=${API_KEY}&with_genres=10749&append_to_response=videos`},
        {title: "Horror Movies", url:`/discover/movie/?api_key=${API_KEY}&with_genres=27&append_to_response=videos`},
        {title: "Mystery", url:`/discover/movie/?api_key=${API_KEY}&with_genres=9648&append_to_response=videos`},
        {title: "Scifi", url:`/discover/movie/?api_key=${API_KEY}&with_genres=878&append_to_response=videos`},
        {title: "Western", url:`/discover/movie/?api_key=${API_KEY}&with_genres=37&append_to_response=videos`},
        {title: "Animation", url:`/discover/movie/?api_key=${API_KEY}&with_genres=16&append_to_response=videos`},
    ];

    return(
        <div>
            {
                request.map((req,idx)=>
                    <PrintMovie key={idx} title={req.title} url={API_URl + req.url}/>
                )
            }

        </div>
    )
}
