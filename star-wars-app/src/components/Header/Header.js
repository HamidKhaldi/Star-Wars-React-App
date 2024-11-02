import React from "react";
import { Link } from "react-router-dom";
import homeIconImg from "../../assets/images/home-icon.png";
import searchIcon from "../../assets/images/search-icon.png";

const Header = () => {
  return (
    <>
      <header className="swapi__header">
        <Link to="/">
          <img src={homeIconImg} className="swapi__home-icon" alt="home" />
        </Link>
        <div class="swapi__search-container">
          <input
            type="text"
            placeholder="Search..."
            class="swapi__search-input"
          />
          <button class="swapi__search-button">
            <svg
              class="search-icon"
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
    </>
  );
};

export default Header;
