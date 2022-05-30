import React, { useState, useEffect } from "react";
import { createImgUrl, services } from "./requests";
import "./Backdrop.css";

const Backdrop = ({ fetchUrl, sort }) => {
  const [content, setContent] = useState([]);

  function randomNumber(min, max) {
    //Retorna un numero aleatorio entero entre min y max (inclusive)
    return parseInt(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    //Ejecuta esta función cuando el componente se monta o se cambia el contenido que le es solicitado.
    //Obtiene la lista de contenido de la API segun un orden (sort) y de una pagina aleatoria de las primeras 20
    services
      .get(fetchUrl, "es", randomNumber(0, 19), "ANY", sort)
      .then((request) => {
        setContent(
          request.data.results[
            //Me quedo con un elemento aleatorio de la lista obtenida
            randomNumber(0, request.data.results.length - 1)
          ]
        );
      });
  }, [fetchUrl, sort]);

  // console.table(content);

  return (
    <>
      <header
        className="backdrop"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            ${createImgUrl("LARGE", content?.backdrop_path)}
          )`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="backdrop_title">
          <h1>{`${content?.title || content?.name}${
            //Si el titulo original es en mismo idioma que el titulo, no muestro el titulo original
            content.title !== content.original_title
              ? " (" + content.original_title + ")"
              : ""
          }`}</h1>
        </div>
        <div className="backdrop_logo">
          <h1>LOGO</h1>
        </div>
        <div className="backdrop_description">
          <span>{content?.overview}</span>
        </div>
        <div className="backdrop_buttons_div">
          <button className="backdrop_buttons">▶ Reproducir</button>
          <button className="backdrop_buttons">🛈 Mas información</button>
        </div>
      </header>
    </>
  );
};
export default Backdrop;
