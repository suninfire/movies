import {axiosService} from "./axios.service";

import {urls} from "./urls";


const getMovies = (page=1) => axiosService.get(urls.movies,{params:{page}});

const getGenres = () => axiosService.get(urls.genres);

const getMovieById = (id) => axiosService.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=ad4ff72fd751a6c987d7db1e704d6fd0');

const getMovieByGenreId = (idg,page=1) => axiosService.get('https://api.themoviedb.org/3/discover/movie?api_key=ad4ff72fd751a6c987d7db1e704d6fd0&with_genres='+idg,{params:{page}});


export {getMovies,getGenres,getMovieById,getMovieByGenreId}



