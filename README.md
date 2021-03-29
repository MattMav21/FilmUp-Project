# FilmUp

## Description
[FilmUp](https://filmup-project.herokuapp.com/) is a web application inspired on GoodReads, but focused on movies instead of books. The application allows users search, collect and review movies.

## Development environment configuration
[Instructions on configuring development environment]

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
