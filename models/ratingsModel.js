const { where } = require("../data/dbconfig")

const db = knex(knexConfig.development)

module.exports = {
    getRatings,
    getRatingsById
}

function getRatings() {
    return db('ratings')
}

function getRatingsById(movieId) {
    return db('ratings')
    .where('movie_id' === movieId)
}
