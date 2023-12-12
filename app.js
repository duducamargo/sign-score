const express = require("express");
const app = express();

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      } else if (path.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
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
  res.render("../views/signEjs/signsWater.ejs");
});

app.get("/earth", (req, res) => {
  res.render("../views/signEjs/signsEarth.ejs");
});

app.get("/fire", (req, res) => {
  res.render("../views/signEjs/signsFire.ejs");
});

app.get("/air", (req, res) => {
  res.render("../views/signEjs/signsAir.ejs");
});

app.listen(3000);
