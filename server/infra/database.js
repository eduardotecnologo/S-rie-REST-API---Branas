const pgp = require('pg-promise')();
const db = pgp({
  user: 'postgres',
  password: '',
  host: 'localhost',
  database: 'restbranas'
});

module.exports = db;