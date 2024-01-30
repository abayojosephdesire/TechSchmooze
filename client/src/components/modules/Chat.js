import React, { useState, useEffect } from "react";
import SingleMessage from "./SingleMessage.js";
import { NewMessage } from "./NewMessageInput.js";
import "./Chat.css";

const Chat = (props) => {
  return (
    <div className="Chat-container">
      <h3 className="Chat-title">{"Chats > " + props.data.recipient.name}</h3>
      <div className="Chat-messageList">
        {props.data.messages.map((m, i) => (
          <SingleMessage message={m} key={i} />
        ))}
      </div>
      <div className="Chat-newMessage">
        <NewMessage recipient={props.data.recipient} defaultMessageText={props.defaultMessageText} />
      </div>
    </div>
  );
}

export default Chat;
