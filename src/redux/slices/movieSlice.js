import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {getMovieByGenreId, getMovieById, getMovies} from "../../Services";

const initialState = {
    movies: [],
    movie:{}
}
const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}) => {
        const {data} = await getMovies(page);
        return data;
    })

const getMoviesByGenreId = createAsyncThunk(
    'moviesSlice/getMoviesByGenreId',
    async ({idg,page}) => {
        const {data} = await getMovieByGenreId(idg,page);
        return data;
    }
)

const getById = createAsyncThunk(
    'movieSlice/getMovieById',
    async ({id}) => {
        const {data} = await getMovieById(id);
        return data;
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{},
    extraReducers: (builder) =>
        builder
            .addCase(getAllMovies.fulfilled,(state,action)=>{
                state.movies = action.payload.results
            })
            .addCase(getById.fulfilled,(state, action) =>{
             state.movie = action.payload
            })
            .addCase(getMoviesByGenreId.fulfilled,(state, action) => {
                state.movies = action.payload.results
            })

});

let {reducer:movieReducer} = moviesSlice;

const movieActions = {
    getAllMovies,
    getById,
    getMoviesByGenreId
}
export {
    movieReducer,
    movieActions
}