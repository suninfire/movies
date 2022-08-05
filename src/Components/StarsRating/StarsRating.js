import StarRatings from "react-star-ratings/build/star-ratings";

export default function StarsRating({movie}) {

    return (
        <div>
            <StarRatings
                rating={movie.vote_average}
                starRatedColor="yellow"
                starDimension={'15'}
                numberOfStars={10}
                name='rating'
            />
        </div>
    );
}




