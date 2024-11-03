import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../store/data-context";
import heartIcon from "../../assets/images/heart-icon.png";

const FavouriteButton = ({ character }) => {
  const { favouriteCharacters, setFavouriteCharacters } =
    useContext(DataContext);
  const [favourite, setFavourite] = useState(
    favouriteCharacters.some((item) => item.id === character.id)
  );

  const handleFavouriteClick = (character) => {
    if (!favouriteCharacters.some((item) => item.id === character.id)) {
      setFavouriteCharacters((prevDetails) => [...prevDetails, character]);
      setFavourite(true);
    } else {
      setFavouriteCharacters((prevDetails) =>
        prevDetails.filter((char) => char.id !== character.id)
      );
      setFavourite(false);
    }
  };

  useEffect(() => {
    setFavourite(favouriteCharacters.some((item) => item.id === character.id));
    //console.log('favouriteCharacters ', favouriteCharacters);
  }, [favouriteCharacters, character.id]);

  return (
    <>
      <button
        id={character.id}
        className={`swapi__add-favourite-cont ${
          favourite ? "favourite-character" : ""
        }`}
        onClick={() => {
          handleFavouriteClick(character);
        }}
      >
        <p className="swapi__add-favourite-para">
          {!favourite
            ? "Add to favourites"
            : "Remove from favourites"}
        </p>
        {favourite && (
          <img
            src={heartIcon}
            className="swapi__add-favourite-icon"
            alt="heart"
          />
        )}
      </button>
    </>
  );
};

export default FavouriteButton;
