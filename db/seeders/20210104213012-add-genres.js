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
      { name: 'Action', createdAt: new Date(), updatedAt: new Date() }, //1
      { name: 'Adventure', createdAt: new Date(), updatedAt: new Date() }, //2
      { name: 'Animation', createdAt: new Date(), updatedAt: new Date() }, //3
      { name: 'Comedy', createdAt: new Date(), updatedAt: new Date() }, //4
      { name: 'Crime', createdAt: new Date(), updatedAt: new Date() }, //5
      { name: 'Drama', createdAt: new Date(), updatedAt: new Date() }, //6
      { name: 'Musical', createdAt: new Date(), updatedAt: new Date() }, //7
      { name: 'Mystery', createdAt: new Date(), updatedAt: new Date() }, //8
      { name: 'Romance', createdAt: new Date(), updatedAt: new Date() }, //9
      { name: 'Sci-Fi', createdAt: new Date(), updatedAt: new Date() }, //10
      { name: 'Thriller', createdAt: new Date(), updatedAt: new Date() }, //11
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
