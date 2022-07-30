
import  "./CardStyle.css"

import StarsRating from "../StarsRating/StarsRating";

import GenreBadge from "../GenreBadjes/GenreBadge";
import {urls} from "../../Services";



export default function MoviesListCard({movie}) {

    return (
        <div className={'cardBox'} onClick={()=>console.log(movie.id)}>

            <div className={'box'}>
                    <div className={'imgBox'}> <img className={'image'} src={urls.posters + movie.poster_path}/></div>


                <div className={'infoBox'}>
                    <div className={'titleBox'}><h3>{movie.title}</h3></div>
                    <div className={'genreBox'}> <GenreBadge/> </div>
                </div>


            </div>

           <div className={'ratingBox'}>
                <div className={'starsBox'}> <StarsRating movie={movie}/> </div>
                <div className={'rating'}> {movie.vote_average} </div>
           </div>


        </div>

    );
}