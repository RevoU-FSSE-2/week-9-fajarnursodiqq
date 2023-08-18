const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");
//const Redis = require("ioredis");

const app = express();
const port = 3000;

//const redisClient = new Redis();

app.use(bodyParser.json());

app.use("/api", apiRoutes);

// redisClient.on("connect", () => {
//   console.log("Connected to Redis");
// });

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
