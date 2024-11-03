import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../store/data-context';
import CharacterList from '../../components/CharacterList/CharacterList';
import DataMessage from "../../components/DataMessage/DataMessage";
import BackArrow from '../../layout/BackArrow/BackArrow';



const FavouritesPage = () => {

    const { favouriteCharacters } = useContext(DataContext);

    useEffect(() => {
        //console.log('favouriteCharacters', favouriteCharacters);
    }, [favouriteCharacters]);

    return (
        <>
            <BackArrow />
            { favouriteCharacters.length > 0 ? <CharacterList people={favouriteCharacters} /> : <DataMessage message={' No favourite characters at the moment! You need to pick some!'} /> }
        </>
        
    )
};


export default FavouritesPage;