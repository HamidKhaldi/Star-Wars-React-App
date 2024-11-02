import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterList from '../../components/CharacterList/CharacterList';
import DataMessage from "../../components/DataMessage/DataMessage";



const FavouritesPage = ({favouriteCharacters}) => {

    return (
        <>
            <h1 className="swapi__page-header">Favourite Characters</h1>
            { favouriteCharacters ? <CharacterList /> : <DataMessage message={' No favourite characters at the moment! You need to pick some!'} /> }
        </>
        
    )
};


export default FavouritesPage;