const express = require("express");
const connectDB = require("./db");
connectDB();

const app = express();
const port = 3000;

app.use(express.json());
//routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/notes", require("./routes/notes.js"));

app.listen(port, () => console.log(`Dolphin app listening on port ${port}!`));
