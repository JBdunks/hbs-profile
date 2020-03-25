const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;

//==set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

//==Routes==
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/portfolio", function(req, res) {
  res.render("portfolio");
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

var x = 1;
