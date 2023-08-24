const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");
<<<<<<< HEAD
const Redis = require("ioredis");
=======
//const Redis = require("ioredis");
>>>>>>> 9cd5105c552b5e43aea88f040fbdbafaf6174754

const app = express();
const port = 3000;

<<<<<<< HEAD
const redisClient = new Redis();
=======
//const redisClient = new Redis();
>>>>>>> 9cd5105c552b5e43aea88f040fbdbafaf6174754

app.use(bodyParser.json());

app.use("/api", apiRoutes);

<<<<<<< HEAD
redisClient.on("connect", () => {
  console.log("Connected to Redis");
});
=======
// redisClient.on("connect", () => {
//   console.log("Connected to Redis");
// });
>>>>>>> 9cd5105c552b5e43aea88f040fbdbafaf6174754

const db = require("./models/db");
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + db.threadId);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
