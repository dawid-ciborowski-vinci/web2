var express = require('express');
var router = express.Router();

let FILMS = [
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

/*router.get('/', function(req, res, next) {
    console.log("GET /films");
    res.json(FILMS);
});*/

router.get('/', function(req, res, next) {
    let min =
        req?.query['minimum-duration']
        ? req.query['minimum-duration']
        : undefined;
    console.log("Min : " + min);
    let orderedMovies = [];
    
    if (isNaN(min)) {
        orderedMovies.push("Put a number. Bitch")
    } else {
        min = parseInt(min)
        FILMS.forEach(element => {
        if (element.duration >= min) {
            orderedMovies.push(element);
        }
    });
    }
    res.json(orderedMovies)
});

router.get('/:id', (req, res, next) => {
    const indexOfMovieFound = FILMS.findIndex((movie) => movie.id == req.params.id);
    if (indexOfMovieFound < 0) return res.sendStatus(404);
    res.json(FILMS[indexOfMovieFound]);
});

module.exports = router;
