const Pool = require("pg").Pool;

const pool = new Pool({
  user: "node_user",
  password: "node_password",
  host: "localhost",
  port: 5432,
  database: "threedrs"
});

module.exports = pool;