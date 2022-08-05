import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genresActions} from "../../redux";

export default function GenreBadge({movie}) {

    const movieGenresId = movie.genre_ids;

    const {genres} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getAllGenres())
    },[]);

    return (

        <div className={'genresBadges'}>
            {movieGenresId.map(movieGenreId =><div key={movieGenreId}>
            {genres.map((genre) => {if (movieGenreId === genre.id){return <div key={genre.id} className={'genresBadge'}>{genre.name}</div>}})}
            </div>)}
        </div>
    );
}
