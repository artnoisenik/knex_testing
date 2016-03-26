var knex = require('../db/knex');
function Books() {
  return knex('books');
}
