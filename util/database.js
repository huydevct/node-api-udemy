const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  database: "myDB",
  password: "password",
});

// admin - password

module.exports = pool.promise();
