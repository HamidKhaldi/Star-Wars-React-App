import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import placeholderImg from "../../assets/images/starwars-placeholder.jpg";
import heartIcon from "../../assets/images/heart-icon.png";

const CharacterCard = ({name, gender, planet}) => {
  return (
    <>
      <div className="swapi__character-card">
        <img
          src={placeholderImg}
          className="swapi__character-card-img"
          alt="placeholder"
        />
        <ul className="swapi__character-details-list">
          <li className="swapi__character-details-list--item">
            Name: {name}
          </li>
          <li className="swapi__character-details-list--item">
            Gender: {gender}
          </li>
          <li className="swapi__character-details-list--item">
              Home Planet: {gender}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CharacterCard;
