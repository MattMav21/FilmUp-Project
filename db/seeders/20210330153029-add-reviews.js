'use strict';

//loop that randomly selects movieId

module.exports = {
  up: (queryInterface, Sequelize) => {

    const reviews = [
      "BEST MOVIE EVER!!!",
      "this movie sucks",
      "9 out of 10, would recommend!",
      "meh",
      "The original was better",
      "hahahahahahahahahahahahaha",
      "I can't wait for the sequel!!",
      "it was ok, i guess",
      "Solid Movie",
      "Killin it!"
    ]

    const reviewSeeds = []

    for (let i = 0; i < 30; i++) {
      reviewSeeds.push(
        {
          content: reviews[Math.floor(Math.random() * Math.floor(reviews.length))],
          userId: 1,
          movieId: Math.floor(Math.random() * (20 - 1) + 1),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      )
    }

    return queryInterface.bulkInsert('WatchedMovies', reviewSeeds)
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  //WatchedMovie
  // content: {
  //   type: DataTypes.TEXT,
  // },
  // userId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  // movieId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // }

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('WatchedMovies', null, {})
  }
};
