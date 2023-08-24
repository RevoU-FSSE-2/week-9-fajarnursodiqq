// const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "w9",
// });

// module.exports = db;

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "hcontainers-us-west-154.railway.app",
  port: 7527,
  user: "root",
  password: "1q18KXxgh0XVoIVBsqlf",
  database: "railway",
});

module.exports = db;
