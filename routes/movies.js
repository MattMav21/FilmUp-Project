var express = require('express');
var router = express.Router();
const db = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth')

router.get('/', asyncHandler(async (req, res) => {
  const movies = await db.Movie.findAll()

  res.render('movies', { movies })
}));

router.get(/\/\d+/, csrfProtection, asyncHandler(async (req, res) => {
  const id = req.path.split('/')[1]
  const movie = await db.Movie.findByPk(id, { include: [db.Genre, {model: db.WatchedMovie, as: 'Reviews'}]})
  if (res.locals.authenticated) {
    const vaults = await db.Vault.findAll({ where: { userId: req.session.auth.userId } })
    res.render('movie', { movie, vaults, token: req.csrfToken() })
  } else {
    res.render('movie', { movie })
  }
}))

router.post('/:id/reviews', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const id = req.params.id
  const movie = await db.Movie.findByPk(id, { include: db.Genre })
  const user = await db.User.findByPk(req.session.auth.userId);
  const email = user.dataValues.email;
  const review = db.WatchedMovie.build({
    userId: req.session.auth.userId,
    content: req.body.content,
    movieId: movie.id,
    email: email,
  });

  review.save();
  res.redirect(`/movies/${id}`)
}));

router.post('/:id/reviews/:reviewId/edit', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const id = req.params.id;
  const movie = await db.Movie.findByPk(id, { include: db.Genre })
  const { reviewId } = req.params;
  const review = await db.WatchedMovie.findByPk(reviewId);
  res.render('movie-edit', { id, movie, reviewId, review, token: req.csrfToken() })
}));

router.post('/:id/reviews/:reviewId/edit/edited', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { reviewId } = req.params;
  const review = await db.WatchedMovie.findByPk(reviewId);
  review.content = req.body.content
  await review.save();
  res.redirect(`/movies/${id}`)
}));

router.post('/:id/reviews/:reviewId/delete', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { reviewId } = req.params;
  const review = await db.WatchedMovie.findByPk(reviewId);
  review.content = '';
  review.save();
  res.redirect(`/movies/${id}`);
}));

router.post(/\/\d+/, requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  if (req.body.addToVault) {
    const vaultedMovies = await db.VaultMovie.findAll({ where: { vaultId: req.body.vaultId, movieId: req.body.movieId } })
    if (!vaultedMovies[0]) {
      await db.VaultMovie.create({ vaultId: req.body.vaultId, movieId: req.body.movieId })
      res.redirect(`/movies/${req.body.movieId}`)
    } else {
      throw new Error('Movie already in vault')
    }
  } else if (req.body.watched) {
    const watchedMovie = await db.WatchedMovie.findAll({ where: { userId: req.session.auth.userId, movieId: req.body.movieId } })

    if (!watchedMovie[0]) {
      await db.WatchedMovie.create({ userId: req.session.auth.userId, movieId: req.body.movieId })
      res.redirect(`/movies/${req.body.movieId}`)
    } else {
      throw new Error('Movie already watched!')
    }
  }
}))

module.exports = router;
