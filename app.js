const express = require("express");
const app = express();

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("../views/index.ejs");
});

app.get("/register", (req, res) => {
  res.render("../views/cadastro.ejs");
});

app.get("/aboutus", (req, res) => {
  res.render("../views/about.ejs");
});

app.get("/aboutsign", (req, res) => {
  res.render("../views/aboutSign.ejs");
});

app.get("/water", (req, res) => {
  res.render("../views/signsWater.ejs");
});

app.get("/earth", (req, res) => {
  res.render("../views/signsEarth.ejs");
});

app.get("/fire", (req, res) => {
  res.render("../views/signsFire.ejs");
});

app.get("/air", (req, res) => {
  res.render("../views/signsAir.ejs");
});

app.get;

app.listen(3000);
