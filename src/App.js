import "./App.css";
import React from "react";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import randomNumber from "./utils/functions";

const App = () => {

  const cat = ["TV", "MOVIES"];
  const random_selection = cat[randomNumber(0, cat.length)];

  return (
    <>
      <div className="App">
        <Navbar />
        <Backdrop
          fetchUrl={random_selection === "TV" ? "DISCOVER_TV" : "DISCOVER"}
          sort={"ANY"}
        />
        {/* <Row title="Nuevos Lanzamientos" fetchUrl={"LATEST_MOVIES"} />
        <Row title="Nuevas Series" fetchUrl={"LATEST_TV"} /> */}
        <Row title="Populares en Necflis" fetchUrl={"POPULAR_ALL"} />
        <Row title="Peliculas Taquilleras" fetchUrl={"TOP_RATED_MOVIES"} />
        <Row title="Comedias" fetchUrl={"DISCOVER"} genre={"COMEDY"} />
        <Row title="Series Premiadas" fetchUrl={"TOP_RATED_TV"} />
        <Row title="Tendencias del día" fetchUrl={"TRENDING_ALL"} />
        <Row
          title="Peliculas emocionantes"
          fetchUrl={"DISCOVER"}
          genre={"ACTION"}
        />
        <Row title="Próximos Estrenos" fetchUrl={"UPCOMMING_MOVIES"} />
        <Row
          title="Peliculas de Horror"
          fetchUrl={"DISCOVER"}
          genre={"HORROR"}
        />
        <Row
          title="Sci-fi y fantasía"
          fetchUrl={"DISCOVER"}
          genre={"SCIENCE_FICTION"}
        />
        <Row
          title="TV infantil y familiar"
          fetchUrl={"DISCOVER"}
          genre={"FAMILY"}
        />
        <Row title="Documentales" fetchUrl={"DISCOVER"} genre={"DOCUMENTARY"} />
        <Row title="Romance" fetchUrl={"DISCOVER"} genre={"ROMANCE"} />
      </div>
    </>
  );
};
export default App;
