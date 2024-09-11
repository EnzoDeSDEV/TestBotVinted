// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Pictures/LogoMyBotVinted.png";
import "../Assets/Style/Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="head">
        <a href="/">
          <img src={logo} alt="MyBotVinted Logo" className="logo" />
        </a>
        <h1>MyBotVinted</h1>
      </div>
      <nav>
        <ul className="Navbar">
          <li>
            <Link to="/bot-settings">Réglage</Link>
          </li>
          <li>
            <Link to="/login">Mon compte</Link>
          </li>
          <li>
            <Link to="/search">Mes recherches</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
