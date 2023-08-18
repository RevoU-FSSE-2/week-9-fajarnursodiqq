const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ",
  database: "w9",
});

module.exports = db;
