import React,{useState} from "react";

export function Movie(props) {
    const [value, setValue] = useState("");
    const [movies, setMovies] = useState([]);




    const  handleClick = (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=31769453dd0f9634806aedb81440ed94&language=en-US&query=${value}&page=1&include_adult=false`;
        fetch(url)
            .then(response=>response.json())
            .then(response=>setMovies(response));

    };



    return(
        <>
            <form action=""  onSubmit={handleClick}>
                <input type="text" onChange={(e)=>setValue(e.target.value)}/>
                <button>Search</button>
            </form>

            {console.log(movies)}

        </>
    )
}