'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VaultMovies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vaultId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Vaults' }
      },
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Movies' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('VaultMovies');
  }
};
