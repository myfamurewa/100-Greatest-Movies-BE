const db = require("../data/dbconfig")

module.exports = {
    get,
    getById,
    findByCategory,
    findByRating
}

function get() {
    return db('movies')
}

function getById(id) {
    return db('movies')
    .where({id})
    .first()
}

function findByCategory() {
    return db('movies')
    .where(category);
}

function findByRating(minRating) {
    return db('movies')
    .where(rating >= minRating )
}

