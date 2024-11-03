import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../store/data-context";
import CharacterCard from "../CharacterCard/CharacterCard";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const CharacterList = ({ people }) => {
  const { favouriteCharacters } = useContext(DataContext);
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    setPeopleList([...people]);
  }, [people]);

  useEffect(() => {
    //console.log('peopleList ', peopleList);
  }, [favouriteCharacters, peopleList]);

  return (
    <div className="swapi__character-list-container">
      {peopleList && peopleList.length !== 0 && (
        <ul className="swapi__character-list">
          {peopleList.map((person, index) => (
            <li key={index} className="swapi__character-list--item">
              <CharacterCard character={person} />
              <FavouriteButton
                character={person}
                favourite={person.favourite}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharacterList;
