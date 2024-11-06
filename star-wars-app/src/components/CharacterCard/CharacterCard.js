import React, { useState, useEffect, useReducer, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../store/data-context";
import DetailsCard from "../DetailsCard";
import EditButton from "../../layout/EditButton/EditButton";
import SaveButton from "../../layout/SaveButton";

const MemoizedDetailsCard = React.memo(DetailsCard);

const CharacterCard = ({ character }) => {
  const {favouriteCharacters, setFavouriteCharacters } = useContext(DataContext);
  const [editedCharacter, setEditedCharacter ] = useState(character);
  const [detailsCard, setDetailsCard] = useState(false);
  const [editableCard, setEditableCard] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;


  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Update favouriteCharacters with the edited character when saving
      setFavouriteCharacters((prev) =>
        prev.map((fav) =>
          fav.id === character.id ? { ...character, gender: state.gender, height: state.height } : fav
        )
      );
    }
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
  }, [pathname]);

  useEffect(() => {
    // console.log("character ", character);
    // console.log('editedCharacter ', editedCharacter);
    // setFavouriteCharacters((prevFavouriteCharacters) => [...prevFavouriteCharacters, editedCharacter]);
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
          <MemoizedDetailsCard
            detailsCard={detailsCard}
            editableCard={editableCard}
            character={character}
            isEditing={isEditing}
            state={state}
            onChange={handleChange}
          />
        </Link>
      ) : (
        <MemoizedDetailsCard
          detailsCard={detailsCard}
          editableCard={editableCard}
          character={character}
          isEditing={isEditing}
          state={state}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default CharacterCard;
