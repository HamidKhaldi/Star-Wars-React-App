import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../store/data-context';
import CharacterList from '../../components/CharacterList/CharacterList';
import DataMessage from "../../components/DataMessage/DataMessage";



const FavouritesPage = () => {

    const {favouriteCharacters, setFavouriteCharacters } = useContext(DataContext);

    useEffect(() => {
        console.log('favouriteCharacters', favouriteCharacters);
    }, [favouriteCharacters]);

    return (
        <>
            { favouriteCharacters.length > 0 ? <CharacterList people={favouriteCharacters} /> : <DataMessage message={' No favourite characters at the moment! You need to pick some!'} /> }
        </>
        
    )
};


export default FavouritesPage;