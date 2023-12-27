const express = require("express");
const app = express();
const port = 8000;
// to use ejs__________________________________________
app.set("view engine", "ejs");
// to avilable res.body________________________________
app.use(express.urlencoded({ extended: true }));
// Static file_________________________________________
app.use(express.static("public"));
// auto refresh________________________________________
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
// connect DB mongoose _____________________________________
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

// STUB Schema
const Mydata = require("./models/mydataSchema");

// ANCHOR  Create url ----------------------------------------------
// =========================================================
app.get("/", (req, res) => {
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render("index.ejs",{});

});
// --------------------------------
app.get("/user/add.ejs", (req, res) => {
  res.render("user/add.ejs",{});

});
// --------------------------------
app.get("/user/view.ejs", (req, res) => {
  res.render("user/view.ejs",{});

});
// --------------------------------
app.get("/user/edit.ejs", (req, res) => {
  res.render("user/edit.ejs",{});

});
// --------------------------------

// ________________________________________________________

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
