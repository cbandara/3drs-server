const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "testpass",
  host: "localhost",
  port: 5432,
  database: "threedrs"
});

module.exports = pool;