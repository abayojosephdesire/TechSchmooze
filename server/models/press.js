const mongoose = require("mongoose");
//Press schema
const PressSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  postDate: String,
  title: String,
  content: String,
});
module.exports = mongoose.model("press", PressSchema);
