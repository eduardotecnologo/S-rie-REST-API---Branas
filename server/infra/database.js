const pgp = require('pg-promise')();
const db = pgp({
  user: 'postgres',
  password: 'secret',
  host: 'localhost',
  port: 5432,
  database: 'api_branas'
});

module.exports = db;
