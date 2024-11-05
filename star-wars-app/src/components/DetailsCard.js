import React from 'react';
import placeholderImg from "../assets/images/starwars-placeholder.jpg";


const DetailsCard = ({ detailsCard, editableCard, character, isEditing, state, onChange }) => {

    console.log('isEditing', isEditing);

    return (
        <div
          className={`"swapi__character-card" ${
            detailsCard ? "swapi__character-details-card" : ""
          }`}
        >
          <img
            src={placeholderImg}
            className="swapi__character-card-img"
            alt="placeholder"
          />
          <ul className="swapi__character-details-list">
            <li className="swapi__character-details-list--item">
              <span className="swapi__chaarcter-details-span">Name:</span>{" "}
              {character.name}
            </li>
            {editableCard && (
              <li className="swapi__character-details-list--item">
                <span className="swapi__chaarcter-details-span">Height:</span>
                {isEditing ? (
                  <input
                    className="swapi__editable-input"
                    type="number"
                    name="height"
                    value={state.height}
                    onChange={onChange}
                  />
                ) : (
                  state.height
                )}
              </li>
            )}
            {detailsCard && (
              <li className="swapi__character-details-list--item">
                <span className="swapi__chaarcter-details-span">
                  Hair Colour:
                </span>{" "}
                {character.hair_color}
              </li>
            )}
            {detailsCard && (
              <li className="swapi__character-details-list--item">
                <span className="swapi__chaarcter-details-span">
                  Eye Colour:
                </span>{" "}
                {character.eye_color}
              </li>
            )}
            {editableCard && (
              <li className="swapi__character-details-list--item">
                <span className="swapi__chaarcter-details-span">Gender:</span>
                {isEditing ? (
                  <input
                    className="swapi__editable-input"
                    name="gender"
                    value={state.gender}
                    onChange={onChange}
                  />
                ) : (
                  state.gender
                )}
              </li>
            )}
            <li className="swapi__character-details-list--item">
              <span className="swapi__chaarcter-details-span">
                Home Planet:
              </span>{" "}
              {character.planet}
            </li>
            {detailsCard && character.film_names && (
              <li className="swapi__character-details-list--item">
                <span className="swapi__chaarcter-details-span">Films:</span>
                <ul className="swap__character-films--list">
                  {character.film_names.map((item, index) => (
                    <li
                      key={index}
                      className="swap__character-films--list--item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            )}

            {detailsCard && (
              <li className="swapi__character-details-list--item">
                <span className="swapi__chaarcter-details-span">
                  Starships:
                </span>
                <ul className="swap__character-films--list">
                  {character.starship_names ? (
                    character.starship_names.map((item, index) => (
                      <li
                        key={index}
                        className="swap__character-films--list--item"
                      >
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="swap__character-films--list--item">n/a</li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        </div>
    );
};



export default DetailsCard;