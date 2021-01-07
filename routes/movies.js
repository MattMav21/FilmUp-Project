var express = require('express');
var router = express.Router();
const db = require('../db/models')
const { asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

router.get('/', asyncHandler(async (req, res) => {
  const movies = await db.Movie.findAll()
  res.render('movies', { movies })
}));

router.get(/\/\d+/, asyncHandler(async (req, res) => {
  const id = req.path.split('/')[1]
  const movie = await db.Movie.findByPk(id, { include: [db.Genre, {model: db.WatchedMovie, as: 'Reviews'}]})
  // console.log(movie.toJSON())
  //console.log(movie.Reviews)
  res.render('movie', { movie })
}))

router.post('/:id/reviews', requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id
  const movie = await db.Movie.findByPk(id, { include: db.Genre })
  const review = db.WatchedMovie.build({
    userId: req.session.auth.userId,
    content: req.body.content,
    movieId: movie.id,
  });
  
  // if (req.body.content !== "") {
  // };
  
  review.save();
  res.redirect(`/movies/${id}`)
}));

//

router.post('/:id/reviews/:reviewId/edit', requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id;
  const movie = await db.Movie.findByPk(id, { include: db.Genre })
  const reviewId = req.params.reviewId;
  const review = await db.WatchedMovie.findByPk(reviewId);
  console.log(reviewId)
  // review.content = req.params;
  // await review.save();
  res.render('movie-edit', {id, movie, reviewId, review})
}));

router.post('/:id/reviews/:reviewId/edit/edited', requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id;
  const movie = await db.Movie.findByPk(id, { include: [db.Genre, { model: db.WatchedMovie, as: 'Reviews' }] })
  const reviewId = req.params.reviewId;
  const review = await db.WatchedMovie.findByPk(reviewId);
  // console.log('REQUEST PARAMETERS', req.params)
  // console.log("ID", id)
  // console.log("MOVIE", movie)
  //console.log("REVIEW ID", reviewId)
  //console.log("REVIEW CONTENT", review.content)
  // console.log(req.body)
  // console.log(req.params.id)
  // console.log(review.content)
  review.content = req.body.content
  await review.save();
  res.redirect(`/movies/${id}`)
}));

router.post('/:id/reviews/:reviewId/delete', requireAuth, asyncHandler(async (req, res) => {
  const id = req.params.id;
  const reviewId = req.params.reviewId;
  const review = await db.WatchedMovie.findByPk(reviewId);
  review.content = '';
  review.save();
  res.redirect(`/movies/${id}`);
}));


module.exports = router;
