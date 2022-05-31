import axios from "axios";

export const API = {
  //Endpoints para trabajar la API de themovieDB en forma mas dinamica:
  //Por ejemplo: con createUrl(TOP_RATED_MOVIES, 'en', 1):
  BASE_URL: "https://api.themoviedb.org/3/",
  ENTITY: {
    DISCOVER: "discover/movie",
    DISCOVER_TV: "discover/tv",
    LATEST_MOVIES: "movie/latest",
    LATEST_TV: "tv/latest",
    TRENDING_MOVIES: "trending/movie/day",
    TRENDING_TV: "trending/tv/day",
    TRENDING_ALL: "trending/all/day",
    TOP_RATED_MOVIES: "movie/top_rated",
    TOP_RATED_TV: "tv/top_rated",
    TOP_RATED_ALL: "movie/top_rated",
    POPULAR_MOVIES: "movie/popular",
    POPULAR_TV: "tv/popular",
    POPULAR_ALL: "movie/popular",
    UPCOMMING_MOVIES: "movie/upcoming",
    TV: "tv/",
    MOVIE: "movie/",
  },
  API_KEY: "?api_key=400edbe73702579cf8c68013a117a002",
  LANGUAGE: {
    en: "&language=en-US",
    es: "&language=es-ES",
  },
  PAGE: "&page=",
  IMAGE_URL: "https://image.tmdb.org/t/p/",
  QUALITY: {
    SMALL: "w300",
    MEDIUM: "w500",
    LARGE: "w780",
    ORIGINAL: "original",
  },
  GENRE: {
    ANY: "",
    ACTION: "&with_genres=28",
    ADVENTURE: "&with_genres=12",
    ANIMATION: "&with_genres=16",
    COMEDY: "&with_genres=35",
    DOCUMENTARY: "&with_genres=99",
    FAMILY: "&with_genres=10751",
    HORROR: "&with_genres=27",
    ROMANCE: "&with_genres=10749",
    SCIENCE_FICTION: "&with_genres=878",
    THRILLER: "&with_genres=53",
    WAR: "&with_genres=10752",
    WESTERN: "&with_genres=37",
  },
  SORT: {
    ANY: "",
    POPULARITY: "&sort_by=popularity.desc",
    RELEASE_DATE: "&sort_by=release_date.desc",
    VOTE_AVERAGE: "&sort_by=vote_average.desc",
  },
};

export const createUrl = (
  entity = "TRENDING_ALL",
  language = "es",
  page = 1,
  genre = "ANY",
  sort = "ANY"
) => {
  //Funcion para crear la URL de la API para la obtencion de contenido. Ejemplos:
  //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
  //https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&with_genres=28&language=en-US&sort_by=popularity.desc&page=1
  return `${API.BASE_URL}${API.ENTITY[entity]}${API.API_KEY}${API.GENRE[genre]}${API.LANGUAGE[language]}${API.SORT[sort]}${API.PAGE}${page}`;
};

export const createImgUrl = (quality, poster_path) => {
  //Funcion para crear la URL de la API para la obtencion de imagenes:
  //
  return `${API.IMAGE_URL}${API.QUALITY[quality]}${poster_path}`;
};

export const createContentRatingUrl = (id) => {
  //Funcion para crear la URL de la API para la obtencion de la clasificacion de edades de shows de TV:
  //https://api.themoviedb.org/3/tv/{tv_id}/content_ratings?api_key=<<api_key>>&language=en-US
  return `${API.BASE_URL}${API.ENTITY["TV"]}${id}${"/content_ratings"}${API.API_KEY}`;
};

export const createCertificationUrl = (id) => {
  //Funcion para crear la URL de la API para la obtencion de la clasificacion de edades de las peliculas:
  //https://api.themoviedb.org/3/movie/{movie_id}/release_dates?api_key=<<api_key>>
  return `${API.BASE_URL}${API.ENTITY["MOVIE"]}${id}${"/release_dates"}${API.API_KEY}`;
};

export const services = {
  //Funcion para llamar a las distintas funciones de la API:
  //uso de ejemplo: services.get(API.entity.topRatedMovies, 'es', 1)
  getContent: async (entity, language = "es", page = 1, genre = "ANY") => {
    //Con el metodo get puedo hacer una peticion a la API en forma asincrona
    const url = createUrl(entity, language, page, genre);
    // console.log(url);
    try {
      const response = await axios.get(url);
      return response; //Se retorna una promesa, no un objeto
    } catch (error) {
      // console.log(error);
      return error;
    }
  },
  getPoster: async (quality, poster_path) => {
    const url = createImgUrl(quality, poster_path);
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      return error;
    }
  },
  getContentRating: async (id) => {
    const url = createContentRatingUrl(id);
    // console.log(url);
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      return error;
    }
  },
  getCertification: async (id) => {
    const url = createCertificationUrl(id);
    // console.log(url);
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      return error;
    }
  },
};
