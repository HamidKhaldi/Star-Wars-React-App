import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = ({ people }) => {
    return (
      <div className="swapi__character-list-container">
        { people && people.length !== 0 && <ul className="swapi__character-list">
          {people.map((person, index) => (
            <li key={index} className="swapi__character-list--item">
              <Link to={`character/${ person.id }`} className="swapi__character-list--link">
                <CharacterCard name={person.name} gender={person.gender} planet={person.planet}  />
              </Link>
              </li>
          ))}
        </ul> }
      </div>
    );

};

export default CharacterList;
