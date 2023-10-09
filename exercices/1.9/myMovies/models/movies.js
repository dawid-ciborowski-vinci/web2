const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/movies.json');

function readAllMovies(minimumDuration) {
  const movies = parse(jsonDbPath);

  if (minimumDuration === undefined) return movies;

  const minimumDurationAsNumber = Number(minimumDuration);
  if (Number.isNaN(minimumDurationAsNumber) || minimumDurationAsNumber < 0) return undefined;

  const moviesReachingMinimumDuration = movies.filter((movie) => movie.duration >= minimumDuration);
  return moviesReachingMinimumDuration;
}

function readOneMovie(id) {
  const idAsNumber = Number(id);
  const movies = parse(jsonDbPath);
  const indexOfMovieFound = movies.findIndex((pizza) => pizza.id === idAsNumber);
  if (indexOfMovieFound < 0) return undefined;

  return movies[indexOfMovieFound];
}

function createOneMovie(title, link, duration, budget) {
  const movies = parse(jsonDbPath);

  const createdPizza = {
    id: getNextId(),
    title,
    link,
    duration,
    budget,
  };

  movies.push(createdPizza);

  serialize(jsonDbPath, movies);

  return createdPizza;
}

function getNextId() {
  const movies = parse(jsonDbPath);
  const lastItemIndex = movies?.length !== 0 ? movies.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = movies[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function deleteOneMovie(id) {
  const idAsNumber = Number(id);
  const movies = parse(jsonDbPath);
  const foundIndex = movies.findIndex((pizza) => pizza.id === idAsNumber);
  if (foundIndex < 0) return undefined;
  const deletedMovies = movies.splice(foundIndex, 1);
  const deletedMovie = deletedMovies[0];
  serialize(jsonDbPath, movies);

  return deletedMovie;
}

function updatePartiallyOneMovie(id, propertiesToUpdate) {
  const idAsNumber = Number(id);
  const movies = parse(jsonDbPath);
  const foundIndex = movies.findIndex((pizza) => pizza.id === idAsNumber);
  if (foundIndex < 0) return undefined;

  const updatedPizza = { ...movies[foundIndex], ...propertiesToUpdate };

  movies[foundIndex] = updatedPizza;

  serialize(jsonDbPath, movies);

  return updatedPizza;
}

function updateFullyOneMovieOrCreateOneMovie(id, movieProps) {
  const idAsNumber = Number(id, 10);
  const movies = parse(jsonDbPath);
  const indexOfMovieFound = movies.findIndex((movie) => movie.id === idAsNumber);

  if (indexOfMovieFound < 0) {
    const newMovie = { id: idAsNumber, ...movieProps };
    movies.push(newMovie);
    serialize(jsonDbPath, movies);
    return newMovie;
  }

  const moviePriorToChange = movies[indexOfMovieFound];

  const updatedmovie = {
    ...moviePriorToChange,
    ...movieProps,
  };

  movies[indexOfMovieFound] = updatedmovie;

  serialize(jsonDbPath, movies);

  return updatedmovie;
}

module.exports = {
  readAllmovies: readAllMovies,
  readOneMovie,
  createOneMovie,
  deleteOneMovie,
  updatePartiallyOneMovie,
  updateFullyOneMovieOrCreateOneMovie,
};