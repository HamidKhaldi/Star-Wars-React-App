import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterList from '../../components/CharacterList/CharacterList';



const FavouritesPage = () => {

    return (
        <>
            <h1 className="swapi__page-header">Favourite Characters</h1>
            <CharacterList />
        </>
        
    )
};


export default FavouritesPage;