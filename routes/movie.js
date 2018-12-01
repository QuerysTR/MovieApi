const express = require('express');
const router = express.Router();
// Models
const Movie = require('../models/Movie');

router.post('/', (req, res, next) => {
  //const { title, category, country, year, imdb_score } = req.body;
  // const movie = new Movie({
  //   title: title,
  //   imdb_score: imdb_score,
  //   category: category,
  //   country: country,
  //   year: year
  // });
  const movie = new Movie(req.body);
  
  const promise = movie.save();
  promise.then((data) => {
    res.json({ status: 1 });
  }).catch((err) => {
    res.json(err);
  })
});

module.exports = router;
