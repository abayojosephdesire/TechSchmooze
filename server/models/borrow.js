const mongoose = require("mongoose");
//Borrow schema
const BorrowSchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  postDate: String,
  title: String,
  content: String,
});
module.exports = mongoose.model("borrow", BorrowSchema);
