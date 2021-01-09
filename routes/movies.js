var express = require('express');
const Sequelize = require('sequelize');
var router = express.Router();
const db = require('../db/models')
const { asyncHandler, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth')

router.get('/', asyncHandler(async (req, res) => {
  const movies = await db.Movie.findAll()

  res.render('movies', { movies })
}));

router.get('/genre/:id', csrfProtection, asyncHandler(async (req, res) => {
  const genreId = req.params.id;
  const movies = await db.Movie.findAll({
    include: db.Genre, where: { genreId }
  });
  console.log(movies[0]);
  res.render('movies', { movies, token: req.csrfToken() });
}));

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
  const id = req.params.id
  const movie = await db.Movie.findByPk(id, { include: [db.Genre, { model: db.WatchedMovie, as: 'Reviews' }] })
  const watched = await db.WatchedMovie.findOne({ where: { movieId: id, userId: req.session.auth.userId } })

  if (res.locals.authenticated) {
    const vaults = await db.Vault.findAll({ where: { userId: req.session.auth.userId } })
    res.render('movie', { movie, vaults, watched, token: req.csrfToken() })
  } else {
    res.render('movie', { movie })
  }
}));

router.post('/:id/reviews', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const id = req.params.id
  const movie = await db.Movie.findByPk(id, { include: db.Genre })
  const review = db.WatchedMovie.build({
    userId: req.session.auth.userId,
    content: req.body.content,
    movieId: movie.id,
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

router.post('/:id/watched', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const watchedMovie = await db.WatchedMovie.findAll({ where: { userId: req.session.auth.userId, movieId: req.body.movieId } })

  if (!watchedMovie[0]) {
    await db.WatchedMovie.create({ userId: req.session.auth.userId, movieId: req.body.movieId })
    res.redirect(`/movies/${req.body.movieId}`)
  } else {
    throw new Error('Movie already watched')
  }

}))

router.post('/:id/vaulted', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const vaultedMovie = await db.VaultMovie.findAll({ where: { vaultId: req.session.auth.userId, movieId: req.body.movieId } })

  if (!vaultedMovie[0]) {
    await db.VaultMovie.create({ vaultId: req.body.vaultId, movieId: req.body.movieId })
    res.redirect(`/movies/${req.body.movieId}`)
  } else {
    throw new Error('Movie already in vault!')
  }

}))

router.post("/search", csrfProtection, asyncHandler(async (req, res) => {
  const errors = ["We couldn't find any movies that match your search"];
  const searchTerm = `%${req.body.query}%`;
  if (req.body.query) {
    const movies = await db.Movie.findAll({
      where: {
        title: {
          [Sequelize.Op.iLike]: searchTerm
        }
      }
    });
    if (!movies.length) return res.render('movies', { movies, errors, token: req.csrfToken() });
    res.render('movies', { movies, token: req.csrfToken() });
  } else {
    res.redirect("/");
  }
}));



module.exports = router;
