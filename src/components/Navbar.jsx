import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="Navbar-left-section">
          <img
            className="hamburger-icon"
            src={require("../imgs/hamburger-icon.png")}
            alt="Menu"
          />
          <img
            className="Necflis-logo"
            src={require("../imgs/Necflis-logo.png")}
            alt="Necflis"
          />
        </div>
        <div className="Navbar-middle-section">
          <a className="nav_item" href="#">
            Inicio
          </a>
          <a className="nav_item" href="#">
            Series
          </a>
          <a className="nav_item" href="#">
            Películas
          </a>
          <a className="nav_item" href="#">
            Novedades populares
          </a>
          <a className="nav_item" href="#">
            Mi lista
          </a>
        </div>
        <div className="Navbar-right-section">
          <img
            className="user-img"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Navbar;
