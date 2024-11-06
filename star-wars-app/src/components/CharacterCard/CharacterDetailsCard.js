import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackArrow from "../../layout/BackArrow/BackArrow";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import CharacterCard from "./CharacterCard";
import { getPlanet, fetchFilmNames, fetchStarshipNames } from "../../helpers/helpers";

const CharacterDetailsCard = (character) => {
  const { id } = useParams();
  const [characterDetails, setCharacterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  console.log('character ', character);


  useEffect(() => {
    const fetchAssetsNames = async (character) => {
      character
        ? setCharacterDetails(character.character)
        : setCharacterDetails(null);

      try {
        if (characterDetails) {
          if (id) {
            setCharacterDetails((prevDetails) => ({
              ...prevDetails,
              id: id,
            }));
          }

          if (characterDetails.films && characterDetails.films.length > 0) {
            const filmNames = await fetchFilmNames(characterDetails.films); 
            setCharacterDetails((prevDetails) => ({
              ...prevDetails,
              film_names: filmNames
            }));
          }

          if (
            characterDetails.starships &&
            characterDetails.starships.length > 0
          ) {
            const starshipNames = await  fetchStarshipNames(characterDetails.starships)
            setCharacterDetails((prevDetails) => ({
              ...prevDetails,
              starship_names: starshipNames
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
      <BackArrow />
      {characterDetails && (
        <>
          <CharacterCard character={characterDetails} />
          <FavouriteButton character={characterDetails} />
        </>
      )}
    </>
  );
};

export default CharacterDetailsCard;
