import React, { useState, createContext } from "react";
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    return (
        <DataContext.Provider value={{ characters, setCharacters }}>
            {children}
        </DataContext.Provider>
    );
};