
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
       {
         id: 1,
         name:"The Godfather",
         year: 1972,
         summary: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
         categories: "Crime, Drama",
         runtime: 175,
       },
       {
        id: 2,
        name:"The Shawshank Redemption",
        year: 1994,
        summary: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        categories: "Drama",
        runtime: 142,
      },
      {
        id: 3,
        name:"Schindler's List",
        year: 1993,
        summary: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        categories: "Drama, Biography, History",
        runtime: 195,
      },
      {
        id: 4,
        name:"Raging Bull",
        year: 1980,
        summary: "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
        categories: "Drama, Biography, Sport",
        runtime: 129,
      },
      {
        id: 5,
        name: "Casablanca",
        year: 1942,
        summary: "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco",
        categories: "Drama, Romance, War"
      },
      
      
      ]);
    });
};
