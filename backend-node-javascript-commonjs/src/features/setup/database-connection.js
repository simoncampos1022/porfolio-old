'use strict';

const { Pool } = require('pg');

const pgPostgresPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Trustno1',
  port: 5432,
});

module.exports = { pgPostgresPool };
