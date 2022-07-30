import {axiosService} from "./axios.service";

import {urls} from "./urls";

const getMovies = () => axiosService.get(urls.movies);
const getGenres = () => axiosService.get(urls.genres);

export {getMovies,getGenres}

