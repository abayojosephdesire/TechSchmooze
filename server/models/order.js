const mongoose = require("mongoose");
//Order schema
const OrderSchema = new mongoose.Schema({
  content: String,
});
module.exports = mongoose.model("order", OrderSchema);
