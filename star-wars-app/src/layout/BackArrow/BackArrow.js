import React from "react";
import { Link } from "react-router-dom";

import backArrow from "../../assets/images/back-arrow-white.png";

const BackArrow = () => {
  return (
    <div className="swapi__back-cont">
      <Link to=".." className="swapi__back-link">
        <img
          src={backArrow}
          className="swapi__back-img"
          alt="back arrow"
        />
        <span className="swapi__back-span">back</span>
      </Link>
    </div>
  );
};

export default BackArrow;
