let io;

const userToSocketMap = {}; // maps user ID to socket object
const socketToUserMap = {}; // maps socket ID to user object
const allRooms = {}
const userToRoomMap = {}

const getAllConnectedUsers = () => Object.values(socketToUserMap);
const getSocketFromUserID = (userid) => userToSocketMap[userid];
const getUserFromSocketID = (socketid) => socketToUserMap[socketid];
const getSocketFromSocketID = (socketid) => io.sockets.connected[socketid];

const addUser = (user, socket) => {
  const oldSocket = userToSocketMap[user._id];
  if (oldSocket && oldSocket.id !== socket.id) {
    // there was an old tab open for this user, force it to disconnect
    // FIXME: is this the behavior you want?
    oldSocket.disconnect();
    delete socketToUserMap[oldSocket.id];
  }

  userToSocketMap[user._id] = socket;
  socketToUserMap[socket.id] = user;
};

const addUserToRoom = (userId, discussionId) => {
  if (!(discussionId in allRooms)) {
    allRooms[discussionId]=[];
  }
  allRooms[discussionId].push(userId);
  userToRoomMap[userId] = discussionId;
};

const removerUserFromRoom = (user) => {
  // console.log(user);
  // console.log("yessssssssss");
  const discussionId = userToRoomMap[user._id];
  if (!discussionId){
    return;
  }
  const index = allRooms.indexOf(discussionId);
  if (index !== -1) {
    allRooms.splice(index, 1);
  }
  delete userToRoomMap[user._id];
  // const discussionId = userToRoomMap[user._id];
  // if (allRooms.hasOwnProperty(discussionId)) {
  //   delete allRooms[discussionId];
  // }
  // delete userToRoomMap[user._id];



};

const roomBroadcast = (discussionId, discussionMessage) => {
  for (const userId of allRooms[discussionId]) {
    const socket = getSocketFromUserID(userId);
    if (socket){
      socket.emit("discussionMessage", discussionMessage);
    }

  }
};

const removeUser = (user, socket) => {
  if (user) delete userToSocketMap[user._id];
  removerUserFromRoom(user);
  delete socketToUserMap[socket.id];
};

module.exports = {
  init: (http) => {
    io = require("socket.io")(http);

    io.on("connection", (socket) => {
      console.log(`socket has connected ${socket.id}`);
      socket.on("disconnect", (reason) => {
        const user = getUserFromSocketID(socket.id);
        removeUser(user, socket);
      });
    });
  },

  addUser: addUser,
  removeUser: removeUser,
  userToSocketMap: userToSocketMap,
  roomBroadcast,
  removerUserFromRoom,
  addUserToRoom,

  getSocketFromUserID: getSocketFromUserID,
  getUserFromSocketID: getUserFromSocketID,
  getSocketFromSocketID: getSocketFromSocketID,
  getAllConnectedUsers: getAllConnectedUsers,
  getIo: () => io,
};
