require("dotenv").config();
const express = require("express");

const articlesRoutes = require("./src/routes/getArticles");
const searchRoutes = require("./src/routes/getSearchResult");

const app = express();

const port = process.env.PORT || 3002;

require("./src/db/connection");

app.use("/articles", articlesRoutes);
app.use("/search", searchRoutes);
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("*", (req, res) => {
  res.status(400).send("Bad Request!");
});
app.listen(port, () => {
  console.log("Running at ", port);
});
