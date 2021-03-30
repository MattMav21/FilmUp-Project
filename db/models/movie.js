'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    posterPath: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Movie.associate = function (models) {
    Movie.belongsToMany(models.User, { foreignKey: 'movieId', through: 'WatchedMovies', otherKey: 'userId' })
    Movie.belongsTo(models.Genre, { foreignKey: 'genreId' })
    Movie.belongsToMany(models.Vault, { foreignKey: 'movieId', through: 'VaultMovies', otherKey: 'vaultId' })
    Movie.hasMany(models.WatchedMovie, { foreignKey: 'movieId', as: 'Reviews' })


  };
  return Movie;
};
