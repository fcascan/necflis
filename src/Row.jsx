import React, { useState, useEffect } from "react";
import { createImgUrl, services } from "./requests";
import "./Row.css";

const Row = ({ title, fetchUrl, genre }) => {
  //Componente Fila renderiza una fila, recibe props de titulo,

  const [content, setContent] = useState([]);

  useEffect(() => {
    //Ejecuta esta función cuando el componente se monta o se cambia el contenido que le es solicitado.
    //Obtiene la lista de contenido de la API y la almacena en el estado.
    services
      .get(fetchUrl, "es", 1, genre)
      .then((request) => {
        setContent(request.data.results);
      });
  }, [fetchUrl, genre]);

  // console.table(content);

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {content.map((item, index) => (
            <img
              key={index}
              className="row_poster"
              src={createImgUrl("SMALL", item.poster_path)}
              alt={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Row;
