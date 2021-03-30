'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Vault, { foreignKey: 'userId' })
    User.belongsToMany(models.Movie, { foreignKey: 'userId', through: 'WatchedMovies', otherKey: 'movieId' })
  };
  return User;
};
