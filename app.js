const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "project3"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});