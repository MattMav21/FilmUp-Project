'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchedMovie = sequelize.define('WatchedMovie', {
    content: {
      type: DataTypes.TEXT,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  WatchedMovie.associate = function (models) {
    WatchedMovie.belongsTo(models.Movie, { foreignKey: 'movieId' })
  };
  return WatchedMovie;
};
