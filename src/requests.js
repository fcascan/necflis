import axios from "axios";

//Endpoints para trabajar la API de themovieDB en forma mas dinamica:
export const API = {
  //Por ejemplo: con createUrl(TOP_RATED_MOVIES, 'en', 1):
  //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
  BASE_URL: "https://api.themoviedb.org/3/",
  ENTITY: {
    DISCOVER: "discover/movie",
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

//Funcion para crear la URL de la API para la obtencion de contenido:
export const createUrl = (entity, language = "es", page = 1, genre = "ANY", sort = "ANY") => {
  return `${API.BASE_URL}${API.ENTITY[entity]}${API.API_KEY}${API.GENRE[genre]}${API.LANGUAGE[language]}${API.SORT[sort]}${API.PAGE}${page}`;
};

//Funcion para crear la URL de la API para la obtencion de imagenes:
export const createImgUrl = (quality, poster_path) => {
  return `${API.IMAGE_URL}${API.QUALITY[quality]}${poster_path}`;
};

//Funcion para llamar a las distintas funciones de la API:
//uso de ejemplo: services.get(API.entity.topRatedMovies, 'es', 1)
export const services = {
  get: async (entity, language = "es", page = 1, genre = "ANY") => {
    //Con el metodo get puedo hacer una peticion a la API en forma asincrona
    const url = createUrl(entity, language, page, genre);
    // console.log(url);
    try {
      const response = await axios.get(url);
      return response; //Se retorna una promesa
    } catch (error) {
      // console.log(error);
      return error;
    }
  },
};
