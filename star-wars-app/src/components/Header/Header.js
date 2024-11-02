import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import homeIconImg from "../../assets/images/home-icon.png";

const Header = () => {
  const [showBtn, setShowBtn] = useState(true);
  const [pageName, setPageName] = useState(null);
  const location = useLocation();
  console.log("location ", location);

  useEffect(() => {
    location.pathname === "/favourite-characters"
      ? setShowBtn(false)
      : setShowBtn(true);

    switch (location.pathname) {
      case "/":
        setPageName("Star Wars Characters");
        break;
      case "/character":
        setPageName("Character Details");
        break;
      case "/favourite-characters":
        setPageName("My Favourite Characters");
        break;
      default:
        setPageName("Star Wars App");
    }
  }, [location, pageName]);

  return (
    <>
      <header className="swapi__header">
        <Link to="/">
          <img src={homeIconImg} className="swapi__home-icon" alt="home" />
        </Link>
        {showBtn && (
          <Link to="/favourite-characters" className="swapi__favourites-btn">
            Favourite Characters
          </Link>
        )}
        <div className="swapi__search-container">
          <input
            type="text"
            placeholder="Search..."
            className="swapi__search-input"
          />
          <button className="swapi__search-button">
            <svg
              className="swapi__search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42-1.42ZM11,18A7,7,0,1,1,18,11,7,7,0,0,1,11,18Z"
              />
            </svg>
          </button>
        </div>
      </header>
      <h1 className="swapi__page-header">{pageName}</h1>
    </>
  );
};

export default Header;
