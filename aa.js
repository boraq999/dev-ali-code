const express = require("express");
const app = express();
const port = 8000;
// to avilable res.body
app.use(express.urlencoded({ extended: true }));
// connect DB mongoose
const mongoose = require("mongoose");
// mongodb://127.0.0.1:27017/name the DB in mongoose DB
const mongooseUrl = "mongodb://127.0.0.1:27017/all-data";
mongoose
  .connect(mongooseUrl, {})
  .then((result) => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not contected");
  });

// Import Schema
const Mydata = require("./models/mydataSchema");

// Create url -------------------------------------
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});
app.post("/", (req, res) => {
  console.log(req.body);

  const newData = new Mydata(req.body);
  newData
    .save()
    .then(() => {
      res.redirect("/index.html");
    })
    .catch(() => {
      res.send("Error in send to DB mongoose");
    });
  app.get("/index.html", (req, res) => {
    res.sendFile("./views/sendData.html", { root: __dirname });
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
