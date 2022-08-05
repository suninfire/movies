import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {genresReducer, movieReducer} from "./slices";


const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genresReducer,
});

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {setupStore}