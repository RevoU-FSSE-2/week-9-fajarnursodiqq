const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Amsterdam2021",
//   database: "w9",
// });

const db = mysql.createConnection({
  host: "containers-us-west-154.railway.app",
  //port: "7527",
  user: "root",
  password: "1q18KXxgh0XVoIVBsqlf",
  database: "railway",
});

module.exports = db;
