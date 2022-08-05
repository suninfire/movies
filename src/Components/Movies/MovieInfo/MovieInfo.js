import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router";
import StarRatings from "react-star-ratings/build/star-ratings";

import {movieActions} from "../../../redux";
import "./infoStyle.css"
import {urls} from "../../../Services";


export default function MovieInfo() {

    let {id}=useParams();

    const movie = useSelector(state => state.movies.movie);

    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(movieActions.getById({id:id}))
},[id]);

    return (
        <div className={'details'}>

            <button className={'back'} onClick={() => {window.history.back()}}/>

            <div className={'infoCard'}>

                <div className={'poster'}><img className={'image2'} src={urls.posters + movie.poster_path}/></div>

                <div className={'infoBox'}>

                    <div className={'title'}>{movie.title}   ({movie.original_title})</div>

                    <div className={'date'}>
                        <div>Release date: {(movie.release_date+'').split('-').reverse().join('-')}</div>
                        <div className={'runtime'}>Time: {movie.runtime} min.</div>
                    </div>

                    <div className={'genres'}>{movie.genres?.map(gen =><div className={'genre'}>{gen.name}</div>)} </div>

                    <StarRatings
                        rating={movie.vote_average}
                        starRatedColor="yellow"
                        starDimension={'15'}
                        numberOfStars={10}
                        name='rating'
                    />

                    <div className={'rating2'}>{(movie.vote_average+'').slice(0,3)}%</div>

                    <div className={'tagline'}>{movie.tagline}</div>

                    <div className={'overview'}>{movie.overview}</div>
                </div>

            </div>


        </div>
    );


}