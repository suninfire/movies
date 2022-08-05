import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getGenres} from "../../Services";


const initialState ={
    genres:[]
};

const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async () =>{
        const {genres} = await getGenres().then(value => value.data)
        return genres;
    }
)


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{},
    extraReducers:(builder )=>{
        builder
            .addCase(getAllGenres.fulfilled,(state, action) => {
                state.genres = action.payload
            })
    }
});

const {reducer:genresReducer} = genreSlice;

const genresActions = {
    getAllGenres

}

export {
    genresReducer,
    genresActions
}