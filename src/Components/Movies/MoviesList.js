import {useEffect, useState} from "react";

import MoviesListCard from "./MoviesListCard";
import {getMovies} from "../../Services";

import "./CardStyle.css"
import PaginationComponent from "../Pagination/PaginationComponent";


export default function MoviesList() {

    const [movies,setMovies] = useState([]);

    useEffect(() => {
      getMovies().then(response => {
          setMovies(response.data.results);
      });
    },[]);

    return (

        <div className={'filmBox'}>
            <div className={'pag'}><PaginationComponent/></div>
            {
                movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/> )
            }
        </div>
    );
}

