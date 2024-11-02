import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import placeholderImg from "../../assets/images/starwars-placeholder.jpg";
import heartIcon from "../../assets/images/heart-icon.png";

const CharacterDetailsCard = (character) => {
  const [characterDetails, setCharacterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFilmName = async (url) => {
    // console.log('url ', url);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error retrieving film name!");
      const film = await response.json();
      //console.log('film ', film);
      //console.log("name ", film.title);
      return film.title || "Unknown";
    } catch (error) {
      console.error("error fetching film data ", error);
    }
  };

  const getStarshipName = async (url) => {
    // console.log('url ', url);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error retrieving ship name!");
      const ship = await response.json();
      console.log('ship ', ship);
      //console.log("name ", ship.name);
      return ship.name || "Unknown";
    } catch (error) {
      console.error("error fetching ship data ", error);
    }
  };


  useEffect(()=>{

    const fetchAssetsNames = async (character) => {
      console.log('character ', character);
      character ? setCharacterDetails(character.character) : setCharacterDetails(null);
  
      try{
        if(characterDetails){
          if(characterDetails.films && characterDetails.films.length > 0){
            // console.log('characterDetails.films ',characterDetails.films);
              let filmNames = [];
              await Promise.all(
                characterDetails.films.map(async film => {
                  const filmName = await getFilmName(film);
                  return filmNames.push(filmName);
              }));

              // console.log('filmNames ', filmNames);
              setCharacterDetails((prevDetails) => ({
                ...prevDetails,
                film_names: filmNames,
              }));
             
          }
    
          if(characterDetails.starships && characterDetails.starships.length > 0){
            console.log('characterDetails.starships ', characterDetails.starships);
              let starshipNames = [];
              await Promise.all(
                characterDetails.starships.map(async starship => {
                  const starshipName = await getStarshipName(starship);
                  return starshipNames.push(starshipName);
              }));

              console.log('starshipNames ', starshipNames);
              setCharacterDetails((prevDetails) => ({
                ...prevDetails,
                starship_names: starshipNames,
              }));
             
          }
        }
    
      } catch (err) {
        setError("Failed to load data");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }

    }
    
    fetchAssetsNames(character);
    
    
  }, [character]);

  useEffect(()=> {
    console.log('characterDetails after', characterDetails);
  }, [characterDetails]);

  return (
    <>
      {characterDetails && <div className="swapi__character-details-card">
        <img
          src={placeholderImg}
          className="swapi__character-details-card-img"
          alt="placeholder"
        />
        <ul className="swapi__character-details-details-list">
          <li className="swapi__character-details-details-list--item">
            Name: {characterDetails.name}
          </li>
          <li className="swapi__character-details-details-list--item">
            Hair Colour: {characterDetails.hair_color}
          </li>
          <li className="swapi__character-details-details-list--item">
            Eye Colour: {characterDetails.eye_color}
          </li>
          <li className="swapi__character-details-details-list--item">
            Gender: {characterDetails.gender}
          </li>
          { characterDetails.film_names && 
             <li className="swapi__character-details-details-list--item">
              Films: 
              <ul className="swap__character-films--list">
              { characterDetails.film_names.map((item, index) => (<li key={index} className="swap__character-films--list--item">
                  {item},
                </li>)) }
              </ul>
          </li> }
          { characterDetails.starship_names && <li className="swapi__character-details-details-list--item">
          Starships: 
              <ul className="swap__character-films--list">
              { characterDetails.starship_names.map((item, index) => (<li key={index} className="swap__character-films--list--item">
                  {item},
                </li>)) }
              </ul>
          </li> }
        </ul>
      </div> }
    </>
  );
};

export default CharacterDetailsCard;
