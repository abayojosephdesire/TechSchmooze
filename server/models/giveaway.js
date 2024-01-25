const mongoose = require("mongoose");
//Give Away schema
const GiveAwaySchema = new mongoose.Schema({
  creator_id: String,
  creator_name: String,
  postDate: String,
  title: String,
  content: String,
});
module.exports = mongoose.model("giveaway", GiveAwaySchema);
