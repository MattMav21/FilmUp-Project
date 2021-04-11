const express = require('express');
const Sequelize = require('sequelize');
const fetch = require("node-fetch");
const router = express.Router();
const db = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth');
const { movieDbApiKey } = require('../config');

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const movies = await db.Movie.findAll()

  res.render('movies', { movies, token: req.csrfToken() })
}));

router.get('/genre/:id', csrfProtection, asyncHandler(async (req, res) => {
  const genreId = req.params.id;
  const movies = await db.Movie.findAll({
    include: db.Genre, where: { genreId }
  });
  res.render('movies', { movies, token: req.csrfToken() });
}));

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
  const id = req.params.id
  const movie = await db.Movie.findByPk(id, { include: [db.Genre, db.User, { model: db.WatchedMovie, as: 'Reviews' }] })
  const users = movie.Users;

  const userObjects = users.map(data => data.toJSON());

  // console.log("OBJ", userObjects)


  
  if (res.locals.authenticated) {
    const watched = await db.WatchedMovie.findOne({ where: { movieId: id } })
    const vaults = await db.Vault.findAll({ where: { userId: req.session.auth.userId } })
    let correctUser = userObjects.filter((obj) => obj.id === watched.userId)
    let correctFirst = correctUser.map((corr) => corr.firstName)
    console.log(correctFirst)

    res.render('movie', { movie, vaults, watched, correctFirst, token: req.csrfToken() })
  } else {
    res.render('movie', { movie })
  }
}));

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

router.post('/:id/watched', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const watched = await db.WatchedMovie.findOne({ where: { movieId: req.body.movieId, userId: req.session.auth.userId } })


  if (!watched) {
    await db.WatchedMovie.create({ userId: req.session.auth.userId, movieId: req.body.movieId })
    res.redirect(`/movies/${req.body.movieId}`)
  } else {
    watched.destroy()
    res.redirect(`/movies/${req.body.movieId}`)
  }
}))


router.post('/:id/vaulted', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const vaultedMovie = await db.VaultMovie.findAll({ where: { vaultId: req.body.vaultId, movieId: req.body.movieId } })

  if (!vaultedMovie[0]) {
    await db.VaultMovie.create({ vaultId: req.body.vaultId, movieId: req.body.movieId })
    res.redirect(`/movies/${req.body.movieId}`)
  } else {
    throw new Error('Movie already in vault!')
  }

}))

// ROUTE TO SEARCH FOR MOVIES AND QUERY EXTERNAL API
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

    if (!movies.length) {

      const encodedSearchTerm = encodeURIComponent(req.body.query);

      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${movieDbApiKey}&language=en-US&query=${encodedSearchTerm}&page=1&include_adult=false`);

        if (!response.ok) {
          throw res;
        }

        const responseJSON = await response.json();

        const newMoviesArray = responseJSON.results.map(movie => {
          return {
            title: movie.original_title,
            description: movie.overview,
            releaseDate: movie.release_date,
            posterPath: movie.poster_path,
            genreId: movie.genre_ids[0],
            releaseYear: movie.release_date.split('-')[0],
          }
        });

        newMoviesArray.splice(10);

        return res.render('movies', { newMoviesArray, token: req.csrfToken() });

      } catch (err) {
        console.error(err);
        return res.render('movies', { movies, errors, token: req.csrfToken() });
      }
    }

    res.render('movies', { movies, token: req.csrfToken() });
  } else {
    res.redirect("/");
  }
}));

router.post('/newMovie/', csrfProtection, asyncHandler(async (req, res) => {

  const { title, description, releaseDate, posterPath, genreId } = req.body;

  const newMovie = db.Movie.build({
    title,
    description,
    releaseDate,
    posterPath,
    genreId,
  });

  await newMovie.save();

  res.redirect(`/movies/${newMovie.id}`);
}));



module.exports = router;
