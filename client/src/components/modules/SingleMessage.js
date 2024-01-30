import React, { useState, useEffect } from "react";
import "./SingleMessage.css";

const SingleMessage = (props) => {
  return (
    <div>
    <div className="SingleMessage-container">
      <p className="SingleMessage-title">{props.message.sender.name} <span className="SingleMessage-date">{props.message.timestamp}</span></p>
      <p className="SingleMessage-text">{props.message.content}</p>
    </div>
    </div>
  );
}

export default SingleMessage;
