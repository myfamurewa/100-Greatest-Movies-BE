const db = knex(knexConfig.development)

module.exports = {
    findComments,
    insertComment,
    removeComment,
    editComment
}

function findComments(movieId) {
    return db('comments')
    .where('movie_id' === movieId)
}

function insertComment(comment) {
    return db('comments')
    .insert(comment)
}

function removeComment(id) {
    return db('comments')
    .where({id})
    .del()
}

function editComment(id, comment) {
    return db('comments')
    .where({id})
    .update(comment)
}