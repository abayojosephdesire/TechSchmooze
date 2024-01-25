const mongoose = require("mongoose");
//Order schema
const OrderSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  postDate: String,
  title: String,
  content: String,
});
module.exports = mongoose.model("order", OrderSchema);
