const express = require("express");
const router = express.Router();
const Article = require("../models/articleModel");

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", getArticle, (req, res) => {
  res.json(res.article);
});

async function getArticle(req, res, next) {
  try {
    console.log("Finding article by ID:", req.params.id);
    const article = await Article.findById(req.params.id);

    if (article == null) {
      console.log("Article not found:", req.params.id);
      return res.status(404).json({ message: "Cannot find article" });
    }

    console.log("Article found:", article);
    res.article = article;
    next();
  } catch (err) {
    console.error("Error finding article:", err);
    return res.status(500).json({ message: err.message });
  }
}

router.post("/", async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    image: req.body.image,
  });
  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
