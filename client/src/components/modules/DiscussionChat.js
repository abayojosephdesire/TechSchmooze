import React, { useState, useEffect } from "react";
import SingleDiscussionMessage from "./SingleDiscussionMessage.js";
import { NewDiscussionMessage } from "./NewDiscussionMessageInput.js";
import "./DiscussionChat.css";

const DiscussionChat = (props) => {
  return (
    <div className="DiscussionChat-container">
      <div className="DiscussionChat-input">
        <NewDiscussionMessage discussionId={props.data.discussionId} />
      </div>
      <h3 className="DiscussionChat-title">{props.content}</h3>
      <div className="DiscussionChat-chats">
        {props.data.discussionMessages.map((m, i) => (
          <SingleDiscussionMessage discussionMessage={m} key={i} />
        ))}
      </div>
    </div>
  );
}

export default DiscussionChat;
