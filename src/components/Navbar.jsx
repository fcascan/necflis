import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [blackBackground, handlebBlackBackground] = useState(false);

  useEffect(() => {
    //Efecto que se ejecuta cuando ocurre un scroll de 100px y agrega un fondo negro al Navbar
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        handlebBlackBackground(true);
      } else handlebBlackBackground(false);
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);

  return (
    <>
      <div className={`Navbar ${blackBackground && "Nav_black"}`}>
        <div className="Navbar-left-section">
          <img
            className="hamburger-icon"
            src={require("../imgs/hamburger-icon.png")}
            alt="Menu"
          />
          <a href="#home">
            <img
              className="Necflis-logo"
              src={require("../imgs/Necflis-logo.png")}
              alt="Necflis"
            />
          </a>
        </div>
        <div
          className="Navbar-middle-section"
          style={{ display: window.innerWidth > 800? "flex" : "none" }}
        >
          <a className="nav_item" href="#home">
            Inicio
          </a>
          <a className="nav_item" href="#series">
            Series
          </a>
          <a className="nav_item" href="#movies">
            Películas
          </a>
          <a className="nav_item" href="#popular">
            Novedades populares
          </a>
          <a className="nav_item" href="#list">
            Mi lista
          </a>
        </div>
        <div className="Navbar-right-section">
          <a className="search" href="#search">
            🔍
          </a>
          <a href="#user">
            <img
              className="user-img"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="user"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
