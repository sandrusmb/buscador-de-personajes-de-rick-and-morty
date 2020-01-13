import React from "react";
import logo from "../images/rick.png";
import "../stylesheets/Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__photo" src={logo} alt="logo Rick and Morty" />
    </header>
  );
}

export default Header;
