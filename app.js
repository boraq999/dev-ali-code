const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.sendFile("./views/test.html")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
