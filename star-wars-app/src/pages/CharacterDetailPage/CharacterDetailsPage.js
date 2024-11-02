import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import homeIcon from '../../assets/images/home-icon.png';


const CharacterDetailsPage = () => {

    return (
        <>
            <Link to="/">
                <img src={homeIcon} className='swapi__home-icon' alt='home'/>
            </Link>
            <h1>Character Details Page</h1>
        </>
        
    )
};


export default CharacterDetailsPage;