import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CharacterDetailsCard from '../../components/CharacterCard/CharacterDetailsCard';



const CharacterDetailsPage = () => {

    return (
        <>
            <CharacterDetailsCard />
        </>
        
    )
};


export default CharacterDetailsPage;