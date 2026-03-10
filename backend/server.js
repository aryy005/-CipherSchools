require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());


const cors = require("cors");

const connectMongo = require("./db/mongo");

const assignments = require("./routes/assignments");
const query = require("./routes/query");
const hint = require("./routes/hint");



app.use(cors());
app.use(express.json());

connectMongo();

app.use("/api/assignments", assignments);
app.use("/api/query", query);
app.use("/api/hint", hint);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});