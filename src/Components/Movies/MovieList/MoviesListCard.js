import StarsRating from "../../StarsRating/StarsRating";
import {Link} from "react-router-dom";

import {urls} from "../../../Services";
import  "./CardStyle.css"
import GenreBadge from "../../GenreBadjes/GenreBadge";

export default function MoviesListCard({movie}) {

    return (

        <Link to={'/'+movie.id.toString()} >

         <div className={'cardBox'}>

              <div className={'box'}>
                    <div className={'imgBox'}> <img className={'image'} src={urls.posters + movie.poster_path}/></div>
                <div className={'infoBox'}>
                    <div className={'titleBox'}><h3>{movie.title}</h3></div>
                    <div className={'genreBox'}>
                        <GenreBadge key={movie.id} movie={movie}/> </div>
                </div>

            </div>

           <div className={'ratingBox'}>
                <div className={'starsBox'}> <StarsRating movie={movie}/> </div>
                <div className={'rating'}> {movie.vote_average} </div>
           </div>

        </div>

        </Link>
    );
}

