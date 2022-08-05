import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genresActions} from "../../../../redux";
import "./genres.style.css"
import {Link} from "react-router-dom";

export default function Genres() {

    const {genres} = useSelector(state => state.genres);

    const dispatch2 = useDispatch();

    useEffect(() => {
        dispatch2(genresActions.getAllGenres())
    },[]);

    return (
            <div className={'movgen'}>
                <div className={'genreButtons'}>
                    <div>{genres.map(genre =>
                      <Link to={'genre/'+genre.id.toString()+'?page=1'}><div key={genre.id} className={'genreButton'}>{genre.name}</div></Link>)}</div>
                </div>
        </div>
    )
}

