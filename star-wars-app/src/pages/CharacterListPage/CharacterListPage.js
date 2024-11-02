import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterList from '../../components/CharacterList/CharacterList';



const CharacterListPage = () => {

    return (
        <>
            <h1 className='swapi__page-header'>Star Wars Character List</h1>
            <CharacterList />
        </>
        
    )
};


export default CharacterListPage;