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
    include: db.Genre, where: { genreId } });

  console.log(movies[0]);

  res.render('movies', { movies, token: req.csrfToken() });
}));

router.get(/\/\d+/, csrfProtection, asyncHandler(async (req, res) => {
  const id = req.path.split('/')[1]
  const movie = await db.Movie.findByPk(id, { include: db.Genre })

  if (res.locals.authenticated) {
    const vaults = await db.Vault.findAll({ where: { userId: req.session.auth.userId } })
    res.render('movie', { movie, vaults, token: req.csrfToken() })
  } else {
    res.render('movie', { movie })
  }
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
