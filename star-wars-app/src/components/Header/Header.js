import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../store/data-context";
import homeIconImg from "../../assets/images/home-icon.png";


const Header = () => {
  const [showBtn, setShowBtn] = useState(true);
  const [pageName, setPageName] = useState(null);
  const location = useLocation();
  const { searchTerm, setSearchTerm } = useContext(DataContext);
  
  useEffect(() => {
    location.pathname === "/favourite-characters"
      ? setShowBtn(false)
      : setShowBtn(true);

    // Set the page name based on the current path
    if (location.pathname === "/") {
      setPageName("Star Wars Characters");
    } else if (location.pathname.startsWith("/character/")) {
      setPageName("Character Details");
    } else if (location.pathname === "/favourite-characters") {
      setPageName("My Favourite Characters");
    } else {
      setPageName("Star Wars App");
    }

  }, [location, pageName]);

  const handleInputChange =  (e) => {
      setSearchTerm(e.target.value);
  }
  
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
            placeholder="Find a Star Wars character..."
            className="swapi__search-input"
            id="searchInput"
            onChange={handleInputChange}
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
