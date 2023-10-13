const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Article", articleSchema);
