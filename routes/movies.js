var express = require('express');
var router = express.Router();
const db = require('../db/models')
const { asyncHandler } = require('./utils');

router.get('/', asyncHandler(async (req, res) => {
  const movies = await db.Movie.findAll()
  console.log(movies)

  res.render('movies', { movies })
}));






module.exports = router;
