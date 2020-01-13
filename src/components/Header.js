import React from "react";
import logo from "../images/rick.png";
import "../stylesheets/Header.scss";

function Header() {
  return (
    <div className="header">
      <img className="header__photo" src={logo} alt="logo Rick and Morty" />
    </div>
  );
}

export default Header;
