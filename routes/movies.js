var express = require('express');
var router = express.Router();
const db = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils');

router.get('/', asyncHandler(async (req, res) => {
  const movies = await db.Movie.findAll()
  console.log(movies)

  res.render('movies', { movies })
}));

router.get(/\/\d+/, asyncHandler(async (req, res) => {
  const id = req.path.split('/')[1]
  const movie = await db.Movie.findByPk(id, { include: db.Genre })
  console.log(movie)
  res.render('movie', { movie })
}))

router.post(/\/\d+/, csrfProtection, asyncHandler(async (req, res) => {


}))






module.exports = router;
