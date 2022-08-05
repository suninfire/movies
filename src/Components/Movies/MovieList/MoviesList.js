import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import MoviesListCard from "./MoviesListCard";
import PaginationComponent from "../../Pagination/PaginationComponent";
import {movieActions} from "../../../redux";

export default function MoviesList() {

    const dispatch = useDispatch();

    const {movies} = useSelector( state => state.movies);

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        dispatch(movieActions.getAllMovies({page:query.get('page')}))
    }, [dispatch,query])

    return (
        <div className={'filmBox'}>
            <div className={'pag'}>
               <PaginationComponent query={query} setQuery={setQuery}/>
            </div>

      <div className={'moviesBox'}>
            {
             movies?.map(movie =><MoviesListCard key={movie.id} movie={movie}/> )
            }
      </div>

            <div className={'pag'}>
                <PaginationComponent query={query} setQuery={setQuery} />
            </div>

        </div>
    );
};


