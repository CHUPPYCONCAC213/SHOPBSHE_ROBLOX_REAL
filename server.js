const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const config = require("./config");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const accs = JSON.parse(fs.readFileSync("./data/accs.json"));
  res.render("index", { accs });
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ShopBSHE chạy tại http://localhost:${PORT}`);
});
