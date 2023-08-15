const express = require("express");
const connectDB = require("./db");
connectDB();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => console.log(`Dolphin app listening on port ${port}!`));
