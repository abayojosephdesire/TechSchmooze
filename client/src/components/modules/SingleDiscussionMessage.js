import React, { useState, useEffect } from "react";
import "./SingleDiscussionMessage.css";

const SingleDiscussionMessage = (props) => {
  return (
    <div>
    <div className="SingleDiscussionMessage-container">
      <p className="SingleDiscussionMessage-container-name">{props.discussionMessage.sender.name} <span className="SingleDiscussionMessage-date">{props.discussionMessage.timestamp}</span></p>
      <p className="SingleDiscussionMessage-container-message">{props.discussionMessage.content}</p>
    </div>
    </div>
  );
}

export default SingleDiscussionMessage;
