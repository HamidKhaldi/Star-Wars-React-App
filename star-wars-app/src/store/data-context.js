import React, { useState, createContext } from "react";
export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <DataContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </DataContext.Provider>
    );
};