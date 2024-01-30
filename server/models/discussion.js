const mongoose = require("mongoose");

// Discussion schema
const DiscussionSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  postDate: String,
  content: String,
  category: String,
});
module.exports = mongoose.model("discussion", DiscussionSchema);
