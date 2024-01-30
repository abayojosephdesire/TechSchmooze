const mongoose = require("mongoose");

const DiscussionMessageSchema = new mongoose.Schema({
  sender: {
    _id: String,
    name: String,
  },
  discussionId: String,
  timestamp: { type: Date, default: Date.now },
  content: String,
});

module.exports = mongoose.model("discussionMessage", DiscussionMessageSchema);
