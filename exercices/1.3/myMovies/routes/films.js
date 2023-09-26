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

router.get('/', function(req, res, next) {
    console.log("GET /films");
    res.json(FILMS);
  });

module.exports = router;
