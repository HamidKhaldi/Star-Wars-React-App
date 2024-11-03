import React, { useState, createContext } from "react";
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [favouriteCharacters, setFavouriteCharacters] = useState([]);
    return (
        <DataContext.Provider value={{ searchTerm, setSearchTerm, favouriteCharacters, setFavouriteCharacters }}>
            {children}
        </DataContext.Provider>
    );
};