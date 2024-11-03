import React, { useState, useEffect } from "react";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import placeholderImg from "../../assets/images/starwars-placeholder.jpg";

const CharacterDetailsCard = (character) => {
  const [characterDetails, setCharacterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFilmName = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error retrieving film name!");
      const film = await response.json();
      return film.title || "Unknown";
    } catch (error) {
      console.error("error fetching film data ", error);
    }
  };

  const getStarshipName = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error retrieving ship name!");
      const ship = await response.json();
      return ship.name || "Unknown";
    } catch (error) {
      console.error("error fetching ship data ", error);
    }
  };

  const getPlanet = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error retrieving planet!");
      const planet = await response.json();
      return planet.name || "Unnknown";
    } catch (error) {
      console.error("error fetching homeworld data ", error);
    }
  };

  useEffect(() => {
    const fetchAssetsNames = async (character) => {
      character
        ? setCharacterDetails(character.character)
        : setCharacterDetails(null);

      try {
        if (characterDetails) {
          if (characterDetails.films && characterDetails.films.length > 0) {
            let filmNames = [];
            await Promise.all(
              characterDetails.films.map(async (film) => {
                const filmName = await getFilmName(film);
                return filmNames.push(filmName);
              })
            );
            setCharacterDetails((prevDetails) => ({
              ...prevDetails,
              film_names: filmNames,
            }));
          }

          if (
            characterDetails.starships &&
            characterDetails.starships.length > 0
          ) {
            let starshipNames = [];
            await Promise.all(
              characterDetails.starships.map(async (starship) => {
                const starshipName = await getStarshipName(starship);
                return starshipNames.push(starshipName);
              })
            );
            setCharacterDetails((prevDetails) => ({
              ...prevDetails,
              starship_names: starshipNames,
            }));
          }

          if (characterDetails.homeworld) {
            const planetName = await getPlanet(characterDetails.homeworld);
            setCharacterDetails((prevDetails) => ({
              ...prevDetails,
              planet: planetName,
            }));
          }
        }
      } catch (err) {
        setError("Failed to load data");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssetsNames(character);
  }, [character]);

  useEffect(() => {
    console.log("characterDetails after", characterDetails);
  }, [characterDetails]);

  return (
    <>
      {characterDetails && (
        <div className="swapi__character-details-card">
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
            <li className="swapi__character-details-details-list--item">
              Home Planet: {characterDetails.planet}
            </li>
            {characterDetails.film_names && (
              <li className="swapi__character-details-details-list--item">
                Films:
                <ul className="swap__character-films--list">
                  {characterDetails.film_names.map((item, index) => (
                    <li
                      key={index}
                      className="swap__character-films--list--item"
                    >
                      {item},
                    </li>
                  ))}
                </ul>
              </li>
            )}

            <li className="swapi__character-details-details-list--item">
              Starships:
              <ul className="swap__character-films--list">
                {characterDetails.starship_names ? (
                  characterDetails.starship_names.map((item, index) => (
                    <li
                      key={index}
                      className="swap__character-films--list--item"
                    >
                      {item},
                    </li>
                  ))
                ) : (
                  <li className="swap__character-films--list--item">n/a</li>
                )}
              </ul>
            </li>
          </ul>
          <FavouriteButton character={characterDetails} />
        </div>
      )}
    </>
  );
};

export default CharacterDetailsCard;
