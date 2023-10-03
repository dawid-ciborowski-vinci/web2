const express = require('express');

const router = express.Router();
const { serialize, parse } = require('../utils/json');

const jsonDbPath = `${__dirname  }/../data/movies.json`;

const movies = parse(jsonDbPath);

const isObjectEmpty = (objectName) => JSON.stringify(objectName) === "{}";

router.get('/', (req, res) => {
  let min = req?.query['minimum-duration'] ? req.query['minimum-duration'] : undefined;
  const orderedMovies = [];
  
  if (isObjectEmpty(req.query))
    return res.json(movies);
  if (Number.isNaN(min) || min === undefined || min == null) {
    return res.sendStatus(400);
  } 
    min = parseInt(min, 10);
    movies.forEach((element) => {
      if (element.duration >= min) {
        orderedMovies.push(element);
      }
    });
  
  return res.json(orderedMovies);
});

router.get('/:id', (req, res) => {
  const indexOfMovieFound = movies.findIndex((movie) => movie.id === req.params.id);
  if (indexOfMovieFound < 0) return res.sendStatus(404);
  return res.json(movies[indexOfMovieFound]);
});

router.post('/', (req, res) => {
  const title = req?.body?.title?.trim().length !== 0 ? req.body.title : undefined;
  const duration =
    !Number.isNaN(req?.body?.duration) && req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = !Number.isNaN(req?.body?.budget) && req?.body?.budget > 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.trim().length !== 0 ? req.body.link : undefined;

  if (!title || !link || !duration || !budget) return res.sendStatus(400);

  const foundMovie = movies.find((movie) => movie.title === title);

  if (foundMovie) return res.sendStatus(409);

  const nextId = movies.length + 1;

  const newMovie = { id: nextId, title, link, duration, budget };

  movies.push(newMovie);
  serialize(jsonDbPath, movies);

  return res.json(newMovie);
});

router.delete('/:id', (req, res) => {
  const id = req?.params?.id ? req.params.id : undefined;
  if (Number.isNaN(id)) return res.sendStatus(400);

  const foundIndex = movies.findIndex((movie) => movie.id === req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const removedItems = movies.splice(foundIndex, 1);
  const itemRemoved = removedItems[0];

  serialize(jsonDbPath, movies);

  return res.json(itemRemoved);
});

router.patch('/:id', (req, res) => {
  const title = req?.body?.title?.trim().length !== 0 ? req.body.title : undefined;
  const duration =
    !Number.isNaN(req?.body?.duration) && req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = !Number.isNaN(req?.body?.budget) && req?.body?.budget > 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.trim().length !== 0 ? req.body.link : undefined;

  if (!title && !duration && !budget && !link) return res.sendStatus(400);

  const foundIndex = movies.findIndex((movie) => movie.id === req.params.id);

  if (foundIndex < 0) return res.sendStatus(404);

  const updatedMovie = { ...movies[foundIndex], ...req.body };

  movies[foundIndex] = updatedMovie;

  serialize(jsonDbPath, movies);

  return res.json(updatedMovie);
});

router.put('/:id', (req, res) => {
  const title = req?.body?.title;
  const link = req?.body?.link;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;

  if (
    !req.body ||
    !title ||
    !title.trim() ||
    !link ||
    !link.trim() ||
    duration === undefined ||
    typeof req?.body?.duration !== 'number' ||
    duration < 0 ||
    budget === undefined ||
    typeof req?.body?.budget !== 'number' ||
    budget < 0
  )
    return res.sendStatus(400);

  const {id} = req.params;
  const indexOfMovieFound = movies.findIndex((movie) => movie.id === id);

  if (indexOfMovieFound < 0) {
    const newMovie = { id, title, link, duration, budget };
    movies.push(newMovie);
    return res.json(newMovie);
  }

  const moviePriorToChange = movies[indexOfMovieFound];
  const objectContainingPropertiesToBeUpdated = req.body;

  const updatedMovie = {
    ...moviePriorToChange,
    ...objectContainingPropertiesToBeUpdated,
  };

  movies[indexOfMovieFound] = updatedMovie;

  serialize(jsonDbPath, movies);

  return res.json(updatedMovie);
});

module.exports = router;
