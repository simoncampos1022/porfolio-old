'use strict';

const pgp = require('pg-promise')();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'backend_angular',
  user: 'postgres',
  password: 'Trustno1',
};

const dbClient = pgp(config);

module.exports = dbClient;
