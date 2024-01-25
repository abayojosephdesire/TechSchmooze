const mongoose = require("mongoose");
//Order schema
const SaleSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  postDate: String,
  title: String,
  content: String,
});
module.exports = mongoose.model("sale", SaleSchema);
