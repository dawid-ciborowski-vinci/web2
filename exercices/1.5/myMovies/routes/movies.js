var express = require('express');
var router = express.Router();

let MOVIES = [
    {
        id: 1,
        title: "American Pie",
        duration: 90,
        budget: 200000,
        link: "imdb"
    },
    {
        id: 2,
        title: "Hunger Games",
        duration: 120,
        budget: 1000000,
        link: "imdb"
    },
    {
        id: 3,
        title: "Jaws",
        duration: 93,
        budget: 300000,
        link: "imdb"
    },
];

router.get('/', (req, res, next) => {
    console.log("GET ALL");
    res.json(MOVIES);
});

router.get('/', function(req, res, next) {
    let min =
        req?.query['minimum-duration']
        ? req.query['minimum-duration']
        : undefined;
    console.log("Min : " + min);
    let orderedMovies = [];
    
    if (isNaN(min)) {
        return res.sendStatus(400);
    } else {
        min = parseInt(min)
        MOVIES.forEach(element => {
        if (element.duration >= min) {
            orderedMovies.push(element);
        }
    });
    }
    res.json(orderedMovies)
});

router.get('/:id', (req, res, next) => {
    const indexOfMovieFound = MOVIES.findIndex((movie) => movie.id == req.params.id);
    if (indexOfMovieFound < 0) return res.sendStatus(404);
    res.json(MOVIES[indexOfMovieFound]);
});

router.post('/', (req, res) => {
    const title = req?.body?.title?.trim().length !== 0 ? req.body.title : undefined;
    const duration = !isNaN(req?.body?.duration) && req?.body?.duration > 0 ? req.body.duration : undefined;
    const budget = !isNaN(req?.body?.budget) && req?.body?.budget > 0 ? req.body.budget : undefined;
    const link = req?.body?.link?.trim().length !== 0 ? req.body.link : undefined;

    if (!title || !link || !duration || !budget) return res.sendStatus(400);

    let foundMovie = MOVIES.find(function(movie) {
        return movie.title === title;
    });

    if (foundMovie) return res.sendStatus(409);

    const nextId = MOVIES.length + 1 

    const newMovie = { id: nextId, title, link, duration, budget };

    MOVIES.push(newMovie);

    return res.json(newMovie);
});

module.exports = router;
