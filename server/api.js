/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");
const multer = require("multer");
const app = express();

// import models so we can interact with the database
const User = require("./models/user");
const Press = require("./models/press");
const Market = require("./models/market");
const Discussion = require("./models/discussion");
const Comment = require("./models/comment");
const Message = require("./models/message");
const DiscussionMessage = require("./models/discussionMessage");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Presses
router.get("/presses", (req, res) => {
  Press.find({}).then((presses) => res.send(presses));
});
router.post("/press", auth.ensureLoggedIn, (req, res) => {
  const newPress = new Press({
    creator_id: req.user._id,
    creator_name: req.user.name,
    postDate: req.body.postDate,
    type: req.body.type,
    title: req.body.title,
    content: req.body.content,
  });

  newPress.save().then((press) => res.send(press));
});

// Markets
router.get("/markets", (req, res) => {
  Market.find({}).then((markets) => res.send(markets));
});
router.post("/market", auth.ensureLoggedIn, upload.single("image"), (req, res) => {
  const newMarket = new Market({
    creator_id: req.user._id,
    creator_name: req.user.name,
    postDate: req.body.postDate,
    type: req.body.type,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    condition: req.body.condition,
    price: req.body.price,
    image: req.file ? `/uploads/${req.file.filename}` : null,

  });
  newMarket.save().then((market) => res.send(market));
});

// Discussions
router.get("/discussions", (req, res) => {
  Discussion.find({}).then((discussions) => res.send(discussions));
});
router.post("/discussion", auth.ensureLoggedIn, (req, res) => {
  const newDiscussion = new Discussion({
    creator_id: req.user._id,
    creator_name: req.user.name,
    postDate: req.body.postDate,
    content: req.body.content,
    category: req.body.category,
  });

  newDiscussion.save().then((discussion) => res.send(discussion));
});

// Comments
router.get("/comment", (req, res) => {
  Comment.find({ parent: req.query.parent }).then((comments) => {
    res.send(comments);
  });
});

router.post("/comment", auth.ensureLoggedIn, (req, res) => {
  const newComment = new Comment({
    creator_id: req.user._id,
    creator_name: req.user.name,
    parent: req.body.parent,
    content: req.body.content,
  });

  newComment.save().then((comment) => res.send(comment));
});

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.get("/user", (req, res) => {
  User.findById(req.query.userid).then((user) => {
    res.send(user);
  });
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});


// DiscussionMessages
router.get("/discussionMessages", (req, res) => {
  DiscussionMessage.find({ discussionId: req.query.discussionId }).then((discussionMessages) => res.send(discussionMessages));
});

router.post("/discussionMessage", auth.ensureLoggedIn, (req, res) => {
  const discussionMessage = new DiscussionMessage({
    discussionId: req.body.discussionId,
    sender: {
      _id: req.user._id,
      name: req.user.name,
    },
    content: req.body.content,
  });
  discussionMessage.save().then((newDiscussionMessage) => {
    socketManager.roomBroadcast(req.body.discussionId, newDiscussionMessage);
  });
});

router.post("/addUserToRoom", auth.ensureLoggedIn, (req, res) => {
  socketManager.addUserToRoom(req.body.userId, req.body.discussionId);

});

router.post("/removeUserFromRoom", auth.ensureLoggedIn, (req, res) => {
  socketManager.removerUserFromRoom(req.user._id);
});

// Messages
router.get("/messages", (req, res) => {
  const query = {
    $or: [
      { "sender._id": req.user._id, "recipient._id": req.query.recipient_id },
      { "sender._id": req.query.recipient_id, "recipient._id": req.user._id },
    ],
  };

  Message.find(query).then((messages) => res.send(messages));
});

router.post("/message", auth.ensureLoggedIn, (req, res) => {
  const message = new Message({
    recipient: req.body.recipient,
    sender: {
      _id: req.user._id,
      name: req.user.name,
    },
    content: req.body.content,
  });
  message.save();

  socketManager.getSocketFromUserID(req.user._id).emit("message", message);
  if (req.user._id !== req.body.recipient._id && socketManager.userToSocketMap.hasOwnProperty(req.body.recipient._id)) {
    socketManager.getSocketFromUserID(req.body.recipient._id).emit("message", message);
  }
});

// All users
router.get("/allUsers", (req, res) => {
  User.find({}).then((users) => res.send({ allUsers : users }));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
