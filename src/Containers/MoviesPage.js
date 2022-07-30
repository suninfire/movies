import "./movies.page.style.css"
import Header from "../Components/Header/Header";
import MoviesList from "../Components/Movies/MoviesList";


export default function MoviesPage() {
    return (
        <div className={'page'}>
            <Header/>
            <MoviesList/>
        </div>
    );
}