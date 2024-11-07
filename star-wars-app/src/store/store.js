import { configureStore, createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favourites",
    initialState : {
        favouriteCharacters: []
    },
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


const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchTerm: "",
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            console.log('searchTerm ', state.searchTerm);
        },
    },
});

export const { setSearchTerm } = searchSlice.actions;

const  store = configureStore({
    reducer: {
        favourites: favouritesSlice.reducer,
        search: searchSlice.reducer,
    },
});

export default store;
