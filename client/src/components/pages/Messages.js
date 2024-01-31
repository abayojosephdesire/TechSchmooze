import React, { useEffect, useState } from "react";
import ChatList from "../modules/ChatList.js";
import Chat from "../modules/Chat.js";
import { useNavigate, useLocation } from "react-router-dom";
import { socket } from "../../client-socket.js";
import { get } from "../../utilities";
import "./Messages.css";

const Messages = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let recipientId;
  let recipientName;
  if (!searchParams.get("recipientId")){
    recipientId = props.userId;
    recipientName = props.userName;
  } else{
    recipientId = searchParams.get("recipientId");
    recipientName = searchParams.get("recipientName");
  }
  const defaultMessageText = searchParams.get("defaultMessageText");
  const [allUsers, setAllUsers] = useState([]);
  const [activeChat, setActiveChat] = useState({
    recipient: {
      _id: recipientId,
      name: recipientName,
    },
    messages: [],
  });
  const loadMessageHistory = (recipient) => {
    if (!props.userId){
      navigate("/");
    } else {
      get("/api/messages", { recipient_id: recipient._id }).then((messages) => {
        setActiveChat({
          recipient: recipient,
          messages: messages,
        });
      });
    }
  };
  useEffect(() => {
    if (!props.userId) {
      navigate("/");
    }
  }, [props.userId, navigate]);

  useEffect(() => {
    document.title = "Messages";
  }, []);

  useEffect(() => {
    loadMessageHistory(activeChat.recipient);
  }, [activeChat.recipient._id]);

  useEffect(() => {
    get("/api/allUsers").then((data) => {
      if (data.allUsers) {
        setAllUsers(data.allUsers);
      };
    });
  }, []);

  useEffect(() => {
    const addMessages = (data) => {
      if (
        (data.recipient._id === activeChat.recipient._id &&
          data.sender._id === props.userId) ||
        (data.sender._id === activeChat.recipient._id &&
          data.recipient._id === props.userId)
      ) {
        setActiveChat(prevActiveChat => ({
          recipient: prevActiveChat.recipient,
          messages: prevActiveChat.messages.concat(data),
        }));
      }
    };
    socket.on("message", addMessages);
    return () => {
      socket.off("message", addMessages);
    };
  }, [activeChat.recipient._id, props.userId]);

  useEffect(() => {
    const callback = (data) => {
      setAllUsers(data.allUsers);
    };
    socket.on("allUsers", callback);
    return () => {
      socket.off("allUsers", callback);
    };
  }, []);

  const setActiveUser = (user) => {
    if (user._id !== activeChat.recipient._id) {
      setActiveChat({
        recipient: user,
        messages: [],
      });
    }
  };

  return (
    <>
      <div className="Messages-container">
        <div className="Messages-chatList">
          <ChatList
            setActiveUser={setActiveUser}
            userId={props.userId}
            users={allUsers}
            active={activeChat.recipient}
          />
        </div>
        <div className="Messages-chats">
          <Chat data={activeChat} defaultMessageText={defaultMessageText} />
        </div>
      </div>
    </>
  );
}

export default Messages;
