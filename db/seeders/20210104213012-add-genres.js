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
    return queryInterface.bulkInsert('Genre', [
      { name: 'Action' }, //1
      { name: 'Adventure' }, //2
      { name: 'Animation' }, //3
      { name: 'Comedy' }, //4
      { name: 'Crime' }, //5
      { name: 'Drama' }, //6
      { name: 'Musical' }, //7
      { name: 'Mystery' }, //8
      { name: 'Romance' }, //9
      { name: 'Sci-Fi' }, //10
      { name: 'Thriller' }, //11
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Genre', null, {});
  }
};
