import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteCharacters: []
};


const favouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers:{
        addFavourite: (state, action) => {
            if(!state.favouriteCharacters.some(character => character.id === action.payload.id)) {
                state.favouriteCharacters.push(action.payload);
            }
        },
        removeFavourite: (state, action) => {
            state.favouriteCharacters = state.favouriteCharacters.filter(
                (character) => character.id !== action.payload
            );
        },
    }
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

const  store = configureStore({
    reducer: {
        favourites: favouritesSlice.reducer,
    },
});

export default store;
