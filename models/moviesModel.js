const db = require("../data/dbconfig")

module.exports = {
    get,
    getById,
}

function get() {
    return db('movies')
}

function getById(id) {
    return db('movies')
    .where({id})
    .first()
}




