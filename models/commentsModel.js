const db = require("../data/dbconfig")

module.exports = {
    findComments,
    insertComment,
    removeComment,
    findCommentbyCommentId,
    editComment
}

function findComments(movieId) {
    return db('comments')
    .where('movie_id', movieId)
}

function findCommentbyCommentId(id){
    return db('comments')
    .where({id})
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