const express = require("express");
const router = express.Router();
const Article = require("../model/articleSchema");

// Route to fetch the search data
router.get("/", async (req, res) => {
  try {
    const searchTerms = req.query.str
      .split(" ")
      .map((term) => `(?=.*${term})`)
      .join("");
    const regex = new RegExp(searchTerms, "i");
    const articles = await Article.aggregate([
      {
        $match: {
          title: { $regex: regex }
        }
      }
    ]);
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
