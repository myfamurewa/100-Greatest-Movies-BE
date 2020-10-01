
exports.up = function(knex) {
     return knex.schema
      .createTable('users', (tbl) => {
          tbl.increments();
          tbl.string('display_name', 128)
          tbl.string('email', 128).unique().notNullable().index()
          tbl.string('pic', 128)
          tbl.string('phone_num', 128)
          tbl.string('google_id', 255)
      })
      .createTable('movies', (tbl) => {
          tbl.increments()
          tbl.string("name")
          tbl.integer("year")
          tbl.string('summary', 1028)
          tbl.integer("runtime")
          tbl.string('categories')
          tbl.string("rating")
      })
      .createTable('comments', (tbl) => {
          tbl.increments()
          tbl.string("text").notNullable()
          tbl.integer('movie_id')
          .references('id')
          .inTable('movies')
          .unsigned()
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
          tbl.timestamps(true, true)
          tbl.boolean("edited").defaultTo(false)
      })
      .createTable('ratings', (tbl) => {
          tbl.increments()
          tbl.integer('rating')
          tbl.integer('movie_id')
          .references('id')
          .inTable('movies')
          .unsigned()
          .notNullable()
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('movies')
  .dropTableIfExists('comments')
  .dropTableIfExists('ratings')
};
