import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CharacterDetailsCard from '../../components/CharacterCard/CharacterDetailsCard';
import homeIcon from '../../assets/images/home-icon.png';


const CharacterDetailsPage = () => {

    return (
        <>
            <Link to="/">
                <img src={homeIcon} className='swapi__home-icon' alt='home'/>
            </Link>
            <h1 className='swapi__page-header'>Character Details Page</h1>
            <CharacterDetailsCard />
        </>
        
    )
};


export default CharacterDetailsPage;