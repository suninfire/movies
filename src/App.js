import {Route, Routes} from "react-router";

import MoviesPage from "./Containers/MoviePage/MoviesPage";
import MovieInfo from "./Components/Movies/MovieInfo/MovieInfo";
import "./app.css"
import MovieGenreList from "./Components/Movies/MovieList/MovieGenreList";


export default function App() {

    return (
           <Routes>
               <Route path={'/'} element={<MoviesPage/>}>
                   <Route path={':id'} element={<MovieInfo/>}/>
                   <Route path={'/genre/:idg'} element={<MovieGenreList/>}/>
               </Route>
           </Routes>
    );
}