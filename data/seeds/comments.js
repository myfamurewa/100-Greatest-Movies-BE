
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, text: "If you say bad things about this movie, you'll be sleeping with the fishes", movie_id: 1, created_at: "2020-10-02 00:38:47",
        updated_at: "2020-10-02 00:38:47",
        edited: 0},
        {id: 2, text: "I made him an offer he couldn't refuse", movie_id: 1, created_at: "2020-10-02 00:38:47",
        updated_at: "2020-10-02 00:38:47",
        edited: 0},
        {id: 3, text: "So you come to me, on the day of my daughter's wedding. To ask for money", movie_id: 1, created_at: "2020-10-02 00:38:47",
        updated_at: "2020-10-02 00:38:47",
        edited: 0}
      ]);
    });
};
