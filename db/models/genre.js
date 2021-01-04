'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    }
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
  };
  return Genre;
};