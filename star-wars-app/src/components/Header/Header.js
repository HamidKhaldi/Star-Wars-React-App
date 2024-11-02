import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../store/data-context";
import homeIconImg from "../../assets/images/home-icon.png";

const Header = () => {
  const [showBtn, setShowBtn] = useState(true);
  const [pageName, setPageName] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(DataContext);
  const searchInput = document.getElementById("searchInput");

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

  const handleInputChange = (e) => {
    setTimeout(() => {
      setSearchTerm(e.target.value);
      if(location.pathname !== "/"){
        navigate('/');
      }
    }, 500);    
  };

  const clearInput = () => {
    setSearchTerm('');
    searchInput.value = null;
    if(location.pathname !== "/"){
      navigate('/');
    }
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
            onKeyUp={handleInputChange}
          />
          { searchTerm !== '' ? (
            <button className="swapi__search-button" onClick={clearInput}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M3 3L21 21M3 21L21 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button> ) :
            ( <button className="swapi__search-button">
            <svg
              className="swapi__search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24" height="24"
            >
              <path
                fill="currentColor"
                d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42-1.42ZM11,18A7,7,0,1,1,18,11,7,7,0,0,1,11,18Z"
              />
            </svg>
          </button> ) 
        }
        </div>
      </header>
      <h1 className="swapi__page-header">{pageName}</h1>
    </>
  );
};

export default Header;
