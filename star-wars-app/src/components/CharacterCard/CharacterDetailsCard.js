import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import placeholderImg from "../../assets/images/starwars-placeholder.jpg";
import heartIcon from "../../assets/images/heart-icon.png";

const CharacterDetailsCard = () => {
  return (
    <>
      <div className="swapi__character-card">
        <img
          src={placeholderImg}
          className="swapi__character-img"
          alt="placeholder"
        />
        <ul className="swapi__character-details-list">
          <li className="swapi__character-details-list--item">
            Name:
          </li>
          <li className="swapi__character-details-list--item">
            Hair Colour:
          </li>
          <li className="swapi__character-details-list--item">
            Eye Colour: 
          </li>
          <li className="swapi__character-details-list--item">
            Gender: 
          </li>
          <li className="swapi__character-details-list--item">
              Films: 
              <ul className="swap__character-films--list">
                <li className="swap__character-films--list--item">
                  film 1
                </li>
                <li className="swap__character-films--list--item">
                  film 2
                </li>
                <li className="swap__character-films--list--item">
                  film 3
                </li>
                <li className="swap__character-films--list--item">
                  film 4
                </li>
              </ul>
          </li>
          <li className="swapi__character-details-list--item">
          Starships: 
              <ul className="swap__character-films--list">
                <li className="swap__character-films--list--item">
                  starship 1
                </li>
                <li className="swap__character-films--list--item">
                  starship 2
                </li>
                <li className="swap__character-films--list--item">
                  starship 3
                </li>
                <li className="swap__character-films--list--item">
                  starship 4
                </li>
              </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CharacterDetailsCard;
