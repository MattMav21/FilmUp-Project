# FilmUp

## Description
[FilmUp](https://filmup-project.herokuapp.com/) is a web application inspired on GoodReads, but focused on movies instead of books. The application allows users search, collect and review movies.

<!-- ## Development environment configuration
[Instructions on configuring development environment] -->

## Technologies
* JavaScript
* NodeJS
* Express
* Pug

## Link to live application
* (https://filmup-project.herokuapp.com/)

## Discussion
Our [Wiki](https://github.com/MattMav21/FilmUp-Project/wiki) has more information about FilmUp.  To learn more about the FilmUp app, visit our Wiki to learn more about the main features of FilmUp, our database schema, each route in the app, and expected user experience.

### Key Features
#### Hybrid Database and External API search
Implemented a site-wide search bar that queries the postgresql database and renders the movies found based on movie titles and a search term.
If no movies are found, the application queries themoviedb.org external API, displays movies found.
Once a user selects a movie from the external API, the application adds it to the database and renders the movie as if it were in the application all along.

#### User Movie Vaults
The user has the ability to curate a personal collection of movies with movie 'vaults'. The user can create and delete vaults, as well as add or remove movies from vaults.

### Key Challenges
* Implementation of AJAX (Asynchronous JavaScript and XML) code using internal API routes for deleting movies from vaults without prompting a page refresh.

## Best Snippets

Our app fetches a third-party API for a movie database that gives users access to movies not already on FilmUp for them.  This allows FilmUp to conserve the storage of the app while still giving users the experience of being able to find any movie and add them to their vaults and review them.  

### How this works:

* If a user searches using a query that doesn't match any movies in the current database, then our search route will fetch a third-party API and search for movies in that database (excluding any movies that are rated for adults only), and will return any of those movies that match the user's search query, displaying them no more than 10 at a time.

Here is the route that makes this possible:

```
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
```
