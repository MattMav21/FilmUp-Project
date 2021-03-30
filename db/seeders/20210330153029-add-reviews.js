'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const reviews = [
      "Best movie ever!",
      "Not sure I liked this one",
      "9 out of 10, would recommend!",
      "Meh",
      "Surprisingly great movie",
      "Glad I found this treasure",
      "I can't wait for the sequel!",
      "It was ok, I guess",
      "Solid Movie",
      "Killing it!",
      "I've watched this so many times and it's still great",
      "Not my cup of tea",
      "Could have been better",
      "That was a bit of a snooze-fest",
      "Can definitely recommend!",
      "They need to make a remake of this!",
      "A bit convoluted story line",
      "Not for me!",
      "Nice! Such a great movie!",
      "Lovely movie :)",
    ]

    const reviewSeeds = []

    for (let i = 0; i < 60; i++) {
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
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('WatchedMovies', null, {})
  }
};
