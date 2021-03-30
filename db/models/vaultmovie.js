'use strict';
module.exports = (sequelize, DataTypes) => {
  const VaultMovie = sequelize.define('VaultMovie', {
    vaultId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  VaultMovie.associate = function (models) {

  };
  return VaultMovie;
};
