const mongoose = require("mongoose");

const DB = process.env.DB_KEY;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
