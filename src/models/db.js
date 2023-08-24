<<<<<<< HEAD
// const mysql = require("mysql");
=======
const mysql = require("mysql");
>>>>>>> 9cd5105c552b5e43aea88f040fbdbafaf6174754

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
<<<<<<< HEAD
//   password: "",
//   database: "w9",
// });

// module.exports = db;

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "containers-us-west-154.railway.app",
  port: "7527",
=======
//   password: "Amsterdam2021",
//   database: "w9",
// });

const db = mysql.createConnection({
  host: "containers-us-west-154.railway.app",
  //port: "7527",
>>>>>>> 9cd5105c552b5e43aea88f040fbdbafaf6174754
  user: "root",
  password: "1q18KXxgh0XVoIVBsqlf",
  database: "railway",
});

module.exports = db;
