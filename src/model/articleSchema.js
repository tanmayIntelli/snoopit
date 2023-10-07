const mongoose = require('mongoose');

// Schema for the article data
const articleSchema = new mongoose.Schema({
  category: [String],
  author: {
    id: mongoose.Schema.Types.ObjectId,
    profileimage: String,
    name: String,
    about: String,
  },
  title: String,
  short_description: String,
  long_description: String,
  content: [
    {
      type: {
        type: String,
        enum: ['text', 'image', 'code'],
      },
      value: String,
    },
  ],
  thumbnail: String,
  tags: [String],
  published_on: {
      t: Number,
      i: Number,
    },
  searchedCount: String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;