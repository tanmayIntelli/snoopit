const express = require("express");
const router = express.Router();
const Article = require("../model/articleSchema");

// Route to fetch the article data
router.get("/", async (req, res) => {
  try {
    const { articleId, type, page, count, limit } = req.query;
    let articles = [];
    if (articleId) {
      let article = await Article.findOneAndUpdate(
        { _id: articleId },
        { $inc: { searchedCount: 1 } },
        { new: true }
      );
      articles.push(article);
    } else if (type) {
      articles =
        type === "recent"
          ? (await Article.find({}).sort({ _id: -1 })).splice(0, 3)
          : await Article.find({ category: type });
    } else if (count) {
      articles = await Article.count();
    } else {
      articles = await Article.find()
        .sort({ searchedCount: -1 })
        .skip(+(page || 0) * 6)
        .limit(+(limit || 6));
    }
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
