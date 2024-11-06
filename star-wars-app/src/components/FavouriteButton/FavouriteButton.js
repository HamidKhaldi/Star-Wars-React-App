import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// import { DataContext } from "../../store/data-context";
import { addFavourite, removeFavourite } from "../../store/store";
import heartIconOutline from "../../assets/images/white-heart-outline-icon.png";
import heartIcon from "../../assets/images/heart-icon.png";

const FavouriteButton = ({ character }) => {
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();
  const favouriteCharacters = useSelector(
    (state) => state.favourites.favouriteCharacters
  );
  // const { favouriteCharacters, setFavouriteCharacters } =
  //   useContext(DataContext);
  const [favourite, setFavourite] = useState(
    favouriteCharacters.some((item) => item.id === character.id)
  );

  const [detailsCard, setDetailsCard] = useState(
      pathname.includes('/character/')
  );

  const handleFavouriteClick = (character) => {
    if (!favourite) {
      dispatch(addFavourite(character));
      setFavourite(true);
    } else {
      dispatch(removeFavourite(character.id));
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
          favourite 
            ? "favourite-character" : ""}
            ${ detailsCard 
            ? "swapi__character-details-favourite-btn" 
            : ""
        }`}
        
        onClick={() => {
          handleFavouriteClick(character);
        }}
      >
        <p className="swapi__add-favourite-para">
          {!favourite ? "Add to favourites" : "Remove from favourites"}
        </p>
        <img
          src={favourite ? heartIcon : heartIconOutline}
          className="swapi__add-favourite-icon"
          alt="heart"
        />
      </button>
    </>
  );
};

export default FavouriteButton;
