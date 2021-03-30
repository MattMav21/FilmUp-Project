'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vault = sequelize.define('Vault', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Vault.associate = function (models) {
    Vault.belongsTo(models.User, { foreignKey: 'userId' })
    Vault.belongsToMany(models.Movie, { foreignKey: 'vaultId', through: 'VaultMovies', otherKey: 'movieId' })

  };
  return Vault;
};
