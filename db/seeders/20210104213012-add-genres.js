'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Genres', [
      { id: 28, name: 'Action', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, name: 'Adventure', createdAt: new Date(), updatedAt: new Date() },
      { id: 16, name: 'Animation', createdAt: new Date(), updatedAt: new Date() },
      { id: 35, name: 'Comedy', createdAt: new Date(), updatedAt: new Date() },
      { id: 80, name: 'Crime', createdAt: new Date(), updatedAt: new Date() },
      { id: 99, name: 'Documentary', createdAt: new Date(), updatedAt: new Date() },
      { id: 18, name: 'Drama', createdAt: new Date(), updatedAt: new Date() },
      { id: 10751, name: 'Family', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, name: 'Fantasy', createdAt: new Date(), updatedAt: new Date() },
      { id: 36, name: 'History', createdAt: new Date(), updatedAt: new Date() },
      { id: 27, name: 'Horror', createdAt: new Date(), updatedAt: new Date() },
      { id: 10402, name: 'Musical', createdAt: new Date(), updatedAt: new Date() },
      { id: 9648, name: 'Mystery', createdAt: new Date(), updatedAt: new Date() },
      { id: 10749, name: 'Romance', createdAt: new Date(), updatedAt: new Date() },
      { id: 878, name: 'Sci-Fi', createdAt: new Date(), updatedAt: new Date() },
      { id: 10770, name: 'TV Movie', createdAt: new Date(), updatedAt: new Date() },
      { id: 53, name: 'Thriller', createdAt: new Date(), updatedAt: new Date() },
      { id: 10752, name: 'War', createdAt: new Date(), updatedAt: new Date() },
      { id: 37, name: 'Western', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
