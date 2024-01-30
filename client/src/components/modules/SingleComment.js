import React from "react";
import "./SingleComment.css";

const SingleComment = (props) => {
  return (
    <div className="SingleComment-container">
      <div>
        <span className="SingleComment-name">{props.creator_name + ": "}</span>
        <span className="SingleComment-text">{props.content}</span>
      </div>
    </div>
  );
};

export default SingleComment;
