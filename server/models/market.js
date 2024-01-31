const mongoose = require("mongoose");
//Market schema
const MarketSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  postDate: String,
  title: String,
  content: String,
  type: String,
  category: String,
  condition: String,
  file: Buffer,
  price: String,
});
module.exports = mongoose.model("market", MarketSchema);
