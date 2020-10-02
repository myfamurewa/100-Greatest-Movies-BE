
const db = require('../data/dbConfig.js')

module.exports = {
    getRatings,
    getRatingsById,
    newRating
}

function getRatings() {
    return db('ratings')
}

function getRatingsById(movieId) {
    return db('ratings')
    .where('movie_id', movieId)
}

function newRating(rating) {
    return db('ratings')
    .insert(rating)
}
