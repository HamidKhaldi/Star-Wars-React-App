import React, { useContext, useEffect } from 'react';
// import { DataContext } from '../../store/data-context';
import { useSelector } from 'react-redux';
import CharacterList from '../../components/CharacterList/CharacterList';
import DataMessage from "../../components/DataMessage/DataMessage";
import BackArrow from '../../layout/BackArrow/BackArrow';



const FavouritesPage = () => {

    const favourites = useSelector(state => state.favourites.favouriteCharacters);

    useEffect(() => {
        //console.log('favouriteCharacters', favouriteCharacters);
    }, [favourites]);

    return (
        <>
            <BackArrow />
            { favourites.length > 0 ? <CharacterList people={favourites} /> : <DataMessage message={' No favourite characters at the moment! You need to pick some!'} /> }
        </>
        
    )
};


export default FavouritesPage;