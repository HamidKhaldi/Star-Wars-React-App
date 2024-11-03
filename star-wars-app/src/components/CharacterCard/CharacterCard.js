import React, { useState, useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import EditButton from "../../layout/EditButton/EditButton";
import placeholderImg from "../../assets/images/starwars-placeholder.jpg";
import SaveButton from "../../layout/SaveButton";

const CharacterCard = ({ character }) => {
  const [detailsCard, setDetailsCard] = useState(false);
  const [editableCard, setEditableCard] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    //console.log("isEditing ", isEditing);
  }, [isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "height") {
      dispatch({ type: "editHeight", payload: value });
    } else if (name === "gender") {
      dispatch({ type: "editGender", payload: value });
    }
  };

  useEffect(() => {
    if (pathname === "/favourite-characters") {
      setEditableCard(true);
    } else if (pathname.includes("/character")) {
      setDetailsCard(true);
    }
  }, [location]);

  useEffect(() => {
    //console.log("character ", character);
  }, [character]);

  const initialState = {
    height: character.height,
    gender: character.gender,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "editHeight":
        return { ...state, height: action.payload };
      case "editGender":
        return { ...state, gender: action.payload };
      default:
        throw new Error("unknown action type");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {editableCard && !isEditing && <EditButton onClick={handleToggleEdit} />}
      {editableCard && isEditing && <SaveButton onClick={handleToggleEdit} />}
      {!isEditing ? (
        <Link
          to={`/character/${character.id}`}
          className="swapi__character-list--link"
        >
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
                  {state.height}
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
              <li className="swapi__character-details-list--item">
                <span className="swapi__chaarcter-details-span">Gender:</span>
                {state.gender}
              </li>
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
        </Link>
      ) : (
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
      )}
    </>
  );
};

export default CharacterCard;
