  
const db = require('../data/dbConfig.js')

module.exports = {
    find,
    find,
    getBy,
    getById,
    add,
    getByEmail,
    update,
    erase,
}

function find() {
    return db('users');
  }
  
  function getBy(filter) {
    return db('users').where(filter);
  }
  
  function getByEmail(filter) {
    return db('users')
      .where('email', '=', filter)
      .first();
  }
  function getById(id) {
    return db('users')
      .where({ id })
      .first();
  }
  function add(user) {
    return db('users').insert(user, 'id');
  }

  function update(id, user) {
      return db('users')
      .where({ id })
      .update(user)
  };

  function erase(id, user){
    return db('users')
    .where({ id })
    .del()
}