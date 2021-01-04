'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    releaseDate: DataTypes.DATEONLY,
    posterPath: DataTypes.STRING,
    genreId: DataTypes.INTEGER
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
  };
  return Movie;
};