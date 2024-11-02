import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CharacterDetailsCard from '../../components/CharacterCard/CharacterDetailsCard';
import DataMessage from '../../components/DataMessage/DataMessage';



const CharacterDetailsPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('id ', id);
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/people/${id}/`);
                if (!response.ok) throw new Error("Character not found");
                const data = await response.json();
                setCharacter(data);
                //console.log('character ', character);
            } catch (err) {
                setError("Failed to load character data");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    return (
        <>
        {character !== null ? (
          <CharacterDetailsCard character={character} />
        ) : loading ? (
          <DataMessage message="Loading..." />
        ) : error ? (
          <DataMessage message="Error fetching data." />
        ) : null}
            
        </>
        
    )
};


export default CharacterDetailsPage;