import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useParams} from "react-router";

import {movieActions} from "../../../redux";
import MoviesListCard from "./MoviesListCard";


export default function MovieGenreList() {

    let {idg} = useParams();

    const dispatch = useDispatch();

    const {movies} = useSelector( state => state.movies);

    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        dispatch(movieActions.getMoviesByGenreId({idg:idg},{page:query.get('page')}))
    }, [idg,query,dispatch])


    const prevPage = () => {
        const pageP = +query.get('page')-1;
        setQuery({page:`${pageP}`})
    };
    const nextPage = () => {
        const pageN = +query.get('page')+1;
        setQuery({page:`${pageN}`})
    };

    return (
        <div className={'filmBox'}>
            <div className={'pag'}>
                <div className={'buttonBox'}>

                    <button className={'butt'} onClick={prevPage}>&#8249;</button>
                    <button className={'butt'} onClick={nextPage}>&#8250;</button>
                </div>
            </div>

                <div className={'moviesBox'}>
                    {
                        movies?.map(movie =><MoviesListCard key={movie.id} movie={movie}/> )
                    }
                </div>

            <div className={'pag'}>
                <div className={'buttonBox'}>
                    <button className={'butt'} onClick={prevPage}>&#8249;</button>
                    <button className={'butt'} onClick={nextPage}>&#8250;</button>
                </div>
            </div>

        </div>
    );
};