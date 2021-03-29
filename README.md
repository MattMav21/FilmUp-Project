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

### Key Features
#### Hybrid Database and External API search
Implemented a site-wide search bar that queries the postgresql database and renders the movies found based  on movie titles and a search term.
If no movies are found, the application queries themoviedb.org external API, displays movies found.
Once a user selects a movie from the external API, the application adds it to the database and renders the movie as if it were in the application all along.

#### User Movie Vaults
The user has the ability to curate a personal collection of movies with movie 'vaults'. The user can create and delete vaults, as well as add or remove movies from vaults.

### Key Challenges
* Implementation of AJAX (Asynchronous JavaScript and XML) code using internal API routes for deleting movies from vaults without prompting a page refresh.
