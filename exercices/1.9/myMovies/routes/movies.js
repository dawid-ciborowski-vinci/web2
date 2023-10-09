const express = require('express');
const {
  readAllMovies,
  readOneMovie,
  createOneMovie,
  deleteOneMovie,
  updatePartiallyOneMovie,
  updateFullyOneMovieOrCreateOneMovie,
} = require('../models/movies');

const router = express.Router();

// Read all the movies, filtered by minimum-duration if the query param exists
router.get('/', (req, res) => {
  const moviesPotentiallyFiltered = readAllMovies(req?.query?.['minimum-duration']);

  if (moviesPotentiallyFiltered === undefined) return res.sendStatus(400);

  return res.json(moviesPotentiallyFiltered);
});

// Read a movie from its id in the menu
router.get('/:id', (req, res) => {
  const foundMovie = readOneMovie(req?.params?.id);

  if (!foundMovie) return res.sendStatus(404);

  return res.json(foundMovie);
});

// Create a movie
router.post('/', (req, res) => {
  const title = req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
  const link = req?.body?.content?.trim().length !== 0 ? req.body.link : undefined;
  const duration =
    typeof req?.body?.duration !== 'number' || req.body.duration < 0
      ? undefined
      : req.body.duration;
  const budget =
    typeof req?.body?.budget !== 'number' || req.body.budget < 0 ? undefined : req.body.budget;

  if (!title || !link || !duration || !budget) return res.sendStatus(400);

  const createdMovie = createOneMovie(title, link, duration, budget);

  return res.json(createdMovie);
});

// Delete a movie
router.delete('/:id', (req, res) => {
  const deletedMovie = deleteOneMovie(req?.params?.id);

  if (!deletedMovie) return res.sendStatus(404);

  return res.json(deletedMovie);
});

// Update one or more properties of a movie identified by its id
router.patch('/:id', (req, res) => {
  const title = req?.body?.title;
  const link = req?.body?.link;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;

  if (
    !req.body ||
    (title !== undefined && !title.trim()) ||
    (link !== undefined && !link.trim()) ||
    (duration !== undefined && (typeof req?.body?.duration !== 'number' || duration < 0)) ||
    (budget !== undefined && (typeof req?.body?.budget !== 'number' || budget < 0))
  )
    return res.sendStatus(400);

  const updatedMovie = updatePartiallyOneMovie(req?.params?.id, req?.body);

  if (!updatedMovie) return res.sendStatus(404);

  return res.json(updatedMovie);
});

// Update a movie only if all properties are given or create it if it does not exist and the id is not existant
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

  const updatedMovieOrNewMovie = updateFullyOneMovieOrCreateOneMovie(req?.params?.id, req?.body);

  return res.json(updatedMovieOrNewMovie);
});

module.exports = router;