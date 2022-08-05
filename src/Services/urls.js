const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=ad4ff72fd751a6c987d7db1e704d6fd0'

const urls = {
    movies: '/discover/movie?'+ apiKey,
    genres: '/genre/movie/list?' + apiKey,
    posters: 'http://image.tmdb.org/t/p/w500/',
}

export {baseUrl,apiKey,urls};

