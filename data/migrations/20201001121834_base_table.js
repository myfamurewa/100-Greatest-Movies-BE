
exports.up = function(knex) {
  
      knex.schema
      .createTable('users', tbl => {
          tbl.increments();
          tbl.string('display_name', 128)
          tbl.string('email', 128).unique().notNullable().index()
          tbl.string('pic', 128)
          tbl.string('phone_num', 128)
          tbl.string('google_id', 255)
      })
      .createTable('movies', tbl => {
          tbl.increments()
          tbl.string("name")
          tbl.string('summary', 1028)
          tbl.string('categories')
      })
      .createTable('comments', tbl => {
          tbl.increments()
          tbl.string("text").notNullable()
          tbl
          .integer('movie_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('movies')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
          tbl.timestamps(true, true)
          .tbl.boolean("edited").defaultTo(false)
      })
      .createTable('ratings', tbl => {
          tbl.increments()
          tbl.integer('ratings')
          tbl
          .integer('movie_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('movies')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExist('users')
  .dropTableIfExist('movies')
  .dropTableIfExist('comments')
  .dropTableIfExist('ratings')
};
