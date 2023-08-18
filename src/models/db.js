const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Amsterdam2021",
  database: "w9",
});

module.exports = db;
