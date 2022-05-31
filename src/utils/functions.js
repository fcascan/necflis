function randomNumber(min, max) {
  //Retorna un numero aleatorio entero entre min y max (inclusive)
  return parseInt(Math.random() * (max - min) + min);
}

export default randomNumber;
