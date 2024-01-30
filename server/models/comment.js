const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  parent: String,
  content: String,
});

module.exports = mongoose.model("comment", CommentSchema);
