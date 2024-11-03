import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import placeholderImg from "../../assets/images/starwars-placeholder.jpg";

const CharacterCard = ({ name, gender, planet, height }) => {

  const [showHeight, setShowHeight] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if(pathname === '/favourite-characters'){ setShowHeight(true) };
  }, [location]);

  

  return (
    <>
      <div className="swapi__character-card">
        <img
          src={placeholderImg}
          className="swapi__character-card-img"
          alt="placeholder"
        />
        <ul className="swapi__character-details-list">
          <li className="swapi__character-details-list--item">Name: {name}</li>
          <li className="swapi__character-details-list--item">
            Gender: {gender}
          </li>
          { showHeight && <li className="swapi__character-details-list--item">
            Height: {height}
          </li> }
          <li className="swapi__character-details-list--item">
            Home Planet: {planet}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CharacterCard;
