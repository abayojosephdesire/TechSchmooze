const mongoose = require("mongoose");
//Order schema
const OrderSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  content: String,
});
module.exports = mongoose.model("order", OrderSchema);
