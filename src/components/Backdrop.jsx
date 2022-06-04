import React, { useState, useEffect } from "react";
import { createImgUrl, services } from "../utils/requests";
import "./Backdrop.css";
import randomNumber from "../utils/functions";

const Backdrop = ({ fetchUrl, sort }) => {
  const [content, setContent] = useState([]);
  const [ageRating, setAgeRating] = useState([]);

  useEffect(() => {
    //Ejecuta esta función cuando el componente se monta o se cambia el contenido que le es solicitado.
    //Obtiene la lista de contenido de la API segun un orden (sort) y de una pagina aleatoria de las primeras 20
    services
      .getContent(fetchUrl, "es", randomNumber(0, 19), "ANY", sort)
      .then((request) => {
        setContent(
          request.data.results[
            //Me quedo con un elemento aleatorio de la lista obtenida
            randomNumber(0, request.data.results.length - 1)
          ]
        );
      });
      fetchUrl === "DISCOVER_TV" && content !== undefined
        ? services.getContentRating(content.id).then((request) => {
            setAgeRating(request.data.results[0].rating);
          })
        : services.getCertification(content.id).then((request) => {
            setAgeRating(request.data.results[0].release_dates.certification);
            console.log(request.data);
          });
  }, [fetchUrl, sort]);

  // console.table(content);
  // console.log(ageRating);

  return (
    <>
      <header
        className="backdrop"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            ${content !== undefined? createImgUrl("ORIGINAL", content.backdrop_path) : ""}
          )`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="backdrop_title">
          <h1>{content?.title || content?.name}</h1>
          <h1>{`${
            //Si el titulo original es en mismo que el titulo traducido, no agrego el titulo original
            content?.title !== content?.original_title
              ? " (" + content.original_title + ")"
              : ""
          }`}</h1>
        </div>
        <div className="backdrop_logo">
          <img key="N-logo" src={require("../imgs/N-logo.png")} alt="N" />
          <img
            key="content-logo"
            src={
              fetchUrl === "DISCOVER_TV"
                ? require("../imgs/series-logo.png")
                : require("../imgs/movies-logo.png")
            }
            alt=" content"
          />
        </div>
        <div className="backdrop_description">
          <span>
            {content?.overview?.length > 250
              ? content.overview.substr(0, 250) + " [...]"
              : content.overview}
          </span>
        </div>
        <div className="backdrop_bottom">
          <div className="backdrop_bottom_left">
            <button className="backdrop_buttons"> ▶ Reproducir </button>
            <button className="backdrop_buttons"> 🛈 Mas información </button>
          </div>
          <div className="backdrop_bottom_right">
            <button className="backdrop_small_button"> 🔊 </button>
            <span className="backdrop_age_rating">{`${" | "}${
              ageRating?.includes("TV") ? "" : "+"
            }${ageRating}`}</span>
          </div>
        </div>
        <div className="fade_effect"></div>
      </header>
    </>
  );
};
export default Backdrop;
